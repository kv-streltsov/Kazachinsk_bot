import {authorizationObject} from "../authorization";
import {InterfaceWeather} from "../dto/interface.weatherts";
import fetch from "cross-fetch"

const URL: string = 'https://api.weather.yandex.ru/v2/informers?lat=57.695769&lon=93.275490&lang=ru_RU'

const HEADER = {
    method: 'GET',
    headers: {
        "X-Yandex-API-Key": authorizationObject.yandex_token
    }
}

export async function getWeather() {

    const resault:Promise<InterfaceWeather> = new Promise((resolve, reject) => {
        let weather: InterfaceWeather
        fetch(URL, HEADER).then(response => {
            response.json().then(weather_data => {
                resolve(weather = {
                    temp: weather_data.fact.temp,
                    feels_like: weather_data.fact.feels_like,
                    icon: weather_data.fact.icon,
                    condition: weather_data.fact.condition,
                    wind_speed: weather_data.fact.wind_speed,
                    wind_dir: weather_data.fact.wind_dir,
                    pressure_mm: weather_data.fact.pressure_mm,
                    pressure_pa: weather_data.fact.pressure_pa,
                    humidity: weather_data.fact.humidity,
                    daytime: weather_data.fact.daytime,
                    polar: weather_data.fact.polar,
                    season: weather_data.fact.season,
                    wind_gust: weather_data.fact.wind_gust,
                })
            })
        })
    })

    return resault

}
getWeather()