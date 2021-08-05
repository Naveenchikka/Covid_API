//const apiUrl = 'https://developer.mercedes-benz.com/console/projects/23da8efb-974b-4b1f-97f4-4c40a5706164/a9bf5d95-6cde-40a2-ad83-33293e459994';
// const apiUrl = 'https://api-thirukkural.vercel.app/api?num=22';
// const apiUrl = 'https://api.mercedes-benz.com/vehicle_images/v1/?apikey=f814853e-6002-4f17-9d0f-d266c4cb0a27';
// const apiUrl = 'https://api.mercedes-benz.com/vehicle_images/v1/vehicles?apikey=f814853e-6002-4f17-9d0f-d266c4cb0a27';
// const apiUrl = 'https://api.todoist.com/rest/v1/projects';
// const apiUrl = 'https://api.smartcar.com/v1.0/vehicles';
const apiUrl = "https://covid-api.mmediagroup.fr/v1/cases";
// const apiUrl = "https://holidayapi.com/v1/holidays/country=IN&year=2021?pretty&key=68ec5061-3a6e-4aa6-8e73-0446b6136d1c"
// const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en_US/"

async function getData()
{
   try 
{
   // var word = document.getElementById("country").value;
   // console.log(word);
   var country = document.getElementById("country").value;
   country = ((country.charAt(0).toUpperCase())+country.slice(1).toLowerCase());
   if(country === null)
   {
      console.log(error);
   }
   else 
   {
   //    console.log(country);
   //   let api = apiUrl+word;
   //   let res = await fetch(api);
   //  let data = await res.json();

      let resp = await fetch(apiUrl+"?country="+country);
      let data = await resp.json();
      //  let resp = await fetch(apiUrl+"?country="+country,{
      //      method: 'GET',
      //   //    mode: 'no-cors',
          
      //      headers:
      //      {
      //          "Accept": 'application/json',
      //          // "Authorization": "Bearer 7e208bffc3e91c58096c60a67ff1c5becab53c58" todolist api
      //          // "Authorization": "Bearer 326133ec-51aa-4a60-a7f7-332afe276f5b"  smartcar api
      //          // 'Content-Type': 'application/x-www-form-urlencoded',
      //          // "Authorization": 'Bearer e27e1fbc-2f0f-4578-a93a-1128ed67128c',
      //       //    'Access-Control-Allow-Origin': '*'
      //  }});
 
    let arr = Object.entries(data)
    console.log(arr);
    
    dom(arr);
    }
}
   catch(error)
   {
        console.log(error);
   }
}





function dom(arr) 
{

   console.log(arr);
   let overall = arr[0];
   console.log(overall[1].confirmed);
   var all = document.getElementById('All')
   all.innerHTML = `Total Cases in ${overall[1].country}: ${overall[1].confirmed}
   <p>Total Death: ${overall[1].deaths}</p>
                   <p>Total Recovered: ${overall[1].recovered}</p>
                   `
   for (let i = 1; i < arr.length; i++) {
       var body = document.getElementById('state')
       let a = arr[i]
       body.innerHTML += ` <div class="col-sm-3">
       <div class="box-part text-left" id="container">
           <div class="title" id="card">
           <div id="front"><h4>${a[0]}</h4></div>
               <div class="text" id="back">
                   <span> Confirmed Cases: ${a[1].confirmed}</span>
                   <p><span>Total Death: </span>${a[1].deaths}</p>
                   <p><span>Total Recovered: </span>${a[1].recovered}</p>
                   <p><span>Last Updated: </span>${new Date (a[1].updated).toLocaleString()}</p>
               </div>

           </div>
           
         </div>
         </div>`
   }
}

// fetch("https://coronavirus-smartable.p.rapidapi.com/stats/v1/US/", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "123456899abjsn62090ec82d8e",
// 		"x-rapidapi-host": "https://www.fitbit.com/oauth2/authorize"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// getData();