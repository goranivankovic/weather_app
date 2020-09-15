




let obj ={
    icon:document.querySelector('.icon'),
    tempDay:document.querySelector('.tempDay'),
    search:document.getElementById('search'),
    txt:document.getElementById('txt'),
    CityN:document.querySelector('.CityN'),
    country:document.querySelector('.country'),
   timeZone:document.querySelector('.timezone'),
   windSpeed:document.querySelector('.windSpeed'),
   pressure:document.querySelector('.pressure'),
   tempMin:document.querySelector('.tempMin'),
   tempMax:document.querySelector('.tempMax'),
   description:document.querySelector('.description'),





    grad:['']
    
    
    
}


 function getData(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.tempDay.textContent=obj.tempDay.textContent+' '+Math.floor(data.main.temp)+'\xB0' )
    .catch((error) => {console.log('Somthing went wrong')})

   
}

function getData2(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
        .then(res=>res.json())
    .then(data=>obj.icon.innerHTML=("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>"))
    .catch((error) => {console.log('Somthing went wrong')})
   
}

function getData3(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.CityN.textContent= obj.CityN.textContent+' '+data.name)
    .catch((error) => {console.log('Somthing went wrong')})
  

    
}

function getData4(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.country.textContent= obj.country.textContent+' '+data.sys.country)
    .catch((error) => {console.log('Somthing went wrong')})
   

}


function getData5(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.timeZone.textContent= obj.timeZone.textContent+' '+data.timezone)
    .catch((error) => {console.log('Somthing went wrong')})
   
}

function getData6(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.windSpeed.textContent= obj.windSpeed.textContent+' '+data.wind.speed+' m/s')
    .catch((error) => {console.log('Somthing went wrong')})

}

function getData7(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.pressure.textContent= obj.pressure.textContent+' '+data.main.pressure+' mb')
    .catch((error) => {console.log('Somthing went wrong')})

}

function getData8(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.tempMin.textContent= obj.tempMin.textContent+' '+Math.floor(data.main.temp_min)+'\xB0')
    .catch((error) => {console.log('Somthing went wrong')})
}

function getData9(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.tempMax.textContent= obj.tempMax.textContent+' '+Math.floor(data.main.temp_max)+'\xB0')
    .catch((error) => {console.log('Somthing went wrong')})
    

    
}


function getData10(){

   
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.grad}&units=metric&appid={api=key}`)
    .then(res=>res.json())
    .then(data=>obj.description.textContent= obj.description.textContent+' '+data.weather[0].description)
    .catch((error) => {console.log('Somthing went wrong')})


}










    




obj.search.addEventListener('click',(e)=>{
 obj.grad=obj.txt.value;
    
     if(obj.txt.value==''){
     
      alert('Please chose a city!!!')

  }else{
      obj.search.disabled=true;
      getData()
      getData2()
      getData3()
      getData4()
      getData5()
      getData6()
      getData7()
      getData8()
      getData9()
      getData10()




   

    setTimeout(()=>{

    obj.icon.innerHTML=''
       obj.tempDay.textContent='Temperature:'
       obj.txt.textContent=''
       obj.CityN.textContent='City:'
       obj.country.textContent='Country:'
       obj.timeZone.textContent='Timezone:'
       obj.windSpeed.textContent='Wind Speed:'
       obj.pressure.textContent='Pressure:'
       obj.tempMin.textContent='Min Temp:'
       obj.tempMax.textContent='Max Temp:'
       obj.description.textContent='Description:'
       obj.search.disabled=false;
    
      
        
          },8000)

         




 
   

  }

    

  
  

 


obj.txt.value=''
 


    

})


