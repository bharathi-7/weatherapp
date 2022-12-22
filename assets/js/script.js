let inputEle=document.getElementById("location-input")
let tempEle=document.getElementById("temp-value")
let locEle=document.getElementById("location")
let weatherdescEle=document.getElementById('weather-desc')
let btnEle=document.getElementById("btn");
const apikey='fd4d04449bd2f08f50cbe6dea8383eab';
btnEle.onclick= function(){
	if(inputEle.value=="")
		alert("please Enter some location..")
	else{
		loc=inputEle.value;
		url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
		axios.get(url).then(res => res.data)
		.then(data => {
			console.log(data);
			const{name}=data;
			const{feels_like}=data.main;
			
			const{description}=data.weather[0];
			tempEle.innerText=Math.floor(feels_like-273);
			
			locEle.innerText=name;
			weatherdescEle.innerText=description
		})
		.catch(()=>{
			alert("enter valid location")
		})
		inputEle.value= " "
	}
}
