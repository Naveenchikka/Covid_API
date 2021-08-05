
const apiUrl = "https://covid-api.mmediagroup.fr/v1/cases";

async function getData()
{
   try 
{
   
   var country = document.getElementById("country").value;
   country = ((country.charAt(0).toUpperCase())+country.slice(1).toLowerCase());
   if(country === null)
   {
      console.log(error);
   }
   else 
   {
  

      let resp = await fetch(apiUrl+"?country="+country);
      let data = await resp.json();
    
 
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


