import {useState, useEffect} from 'react'
import moment from 'moment'
import env from "react-dotenv"

function GetWeekForecast() {
    const [weekData, setWeekData] = useState([])
    const [trihourlyData, setTrihourlyData] = useState([])
    
    useEffect(() => {
        fetch(env.API_URL_ONE_CALL + '&appid=' + env.APP_KEY)
        // fetch('https://api.openweathermap.org/data/2.5/onecall?lat=3.10726&lon=101.606712&exclude=minutely,hourly&units=metric&appid=e6dd92682fb5219bf39567b3b54e345d')
        .then(res => res.json())
        .then(data => {
            setWeekData(data.daily)})
        

        // fetch('https://api.openweathermap.org/data/2.5/forecast?id=1735158&appid=e6dd92682fb5219bf39567b3b54e345d&units=metric')
        fetch(env.API_URL_FORECAST + '&appid=' + env.APP_KEY)
        .then(res => res.json())
        .then(data => {
            let rawData = data.list
            let formattedData = []
            while (rawData.length > 0) {
                let dailyTriHourData = []
                for (let i=0; i<8; i++){
                    dailyTriHourData.push(rawData[i])
                }
                formattedData.push(dailyTriHourData)
                rawData.splice(0,8)
            }
            setTrihourlyData(formattedData)
        })
    },[])

    return [weekData, trihourlyData]
}


function ReturnProps(data) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let props = {
        // change to reference .env
        // image : 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png',
        image :  env.WEATHER_ICON_URL + data.weather[0].icon + '@2x.png',
        imageAlt : data.weather[0].main,
        maxTemp : data.temp.max,
        minTemp : data.temp.min,
        dt: data.dt,
        date: days[moment(data.dt*1000).isoWeekday()-1] + ', ' + moment(data.dt * 1000).format("DD/MM/YYYY")
    }
    
    return props
}


export {GetWeekForecast, ReturnProps}