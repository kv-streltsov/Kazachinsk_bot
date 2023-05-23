import {InterfaceWeather} from "../../dto/interface.weatherts";

export const botMsg = {

    weatherMsg: (data: InterfaceWeather) => {
        return `Температура: ${data.temp} \nДавление: ${data.pressure_mm} \nСкорость ветра: ${data.wind_speed} \n`
    }
}