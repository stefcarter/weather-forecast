function GetInfo() {

  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=54c24fc082e56cb2e88982d72eabdae5&units=imperial')
.then(response => response.json())
.then(data => {
  for(i = 0; i<6; i++){
      document.getElementById("day" + (i+1) +"Temp").innerHTML = "Tempurature: " + Number(data.list[i].main.temp_min).toFixed(1)+ "°";
  }

  for(i = 0; i<6; i++){
      document.getElementById("wind" + (i+1) +"Max").innerHTML = "Wind: " + Number(data.list[i].wind.speed).toFixed(2) + "MPH";
  }

  for(i = 0; i<6; i++){
      document.getElementById("humid" + (i+1) +"Max").innerHTML = "Humidity: " + Number(data.list[i].main.humidity).toFixed(1) + "%";
  }

   for(i = 0; i<6; i++){
      document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
      data.list[i].weather[0].icon
      +".png";
  }
  console.log(data)
})

}

function DefaultScreen(){
  document.getElementById("cityInput").defaultValue = "Atlanta";
  GetInfo();
}

var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
  if(day + d.getDay() > 6){
      return day + d.getDay() - 7;
  }
  else{
      return day + d.getDay();
  }
}
  for(i = 0; i<5; i++){
      document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
  }