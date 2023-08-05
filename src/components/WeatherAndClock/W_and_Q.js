import './W_and_Q.css'
import { useEffect, useState } from 'react';
function Weather(){
    const api_url = "https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=APIKEY"
    const [data, setData] = useState([])
    async function fetchData(){
        const res = await fetch(api_url);
        const d = await res.json();
        return setData(d); 
    }
    let temp = 1.0;
    let weather = "weather"
    let icon = "icon"
    useEffect(()=>{
        fetchData();
    }, [])
   // if(data != []) {temp=data.main.temp - 273.15; temp = temp.toFixed(1); weather = data.weather[0].main}
    
    return (
    // Here comes the weather
    <div className='weather_container'>
    <h1 className='weather base'>  {temp} {weather} </h1>
    </div>
    )
}



function Time(){
const [time, setTime] = useState(new Date());
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    useEffect(()=> {
        const timerID = setInterval(() => {
            setTime(new Date())
        }, 1000);
        return()=>{clearInterval(timerID)}
    }, [])
    var clock_time = time.toLocaleTimeString(navigator.language, {hour:'2-digit', minute:'2-digit'});
    var clock_date = time.getDate();
    var clock_month= months[time.getMonth()];
    return (
    // Here comes the weather
    <div className='base time_date_container'>
        <div className='base time'> {clock_time} </div>
     <div className='base date'> {clock_month} {clock_date} </div>
    </div>
    )
}

function Qotd(){
    const url = "https://api.quotable.io/quotes/random?maxLength=150"
    
    const [data, setData] = useState([{"content":"Quote" , "author":"author"}]);
    async function fetchInfo(){ 
        const res = await fetch(url);
        const d = await res.json();
        return setData(d); 
        }
    useEffect(()=>{
        fetchInfo();
    }, [])
    
    return(
        <h1 className='qotd base'>  {data[0]["content"]}  <br></br>  <span className='author'> ~ {data[0]["author"]} </span> </h1>
    )
}

function Midsect(){
    return(
        <div className="main_container">
            <div className='wt_container'> 
                <Time />
                <div> <Weather  /> </div>
             </div>
            <div className='q_container'> <Qotd /> </div>
        </div>
    )
}

export default Midsect;