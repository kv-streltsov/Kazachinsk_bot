import * as dotenv from 'dotenv'
import TelegramBot from "node-telegram-bot-api";
import {mongoMain} from "./db.mongo.cloud/mongo.client";
import {authorizationObject} from "./authorization";
import {mongoDbRepository} from "./repository/mongoDbRepository";
import {getWeather} from "./api.weather.yandex/weather";
import {botMsg} from "./bot/msg/bot.msg";
import {InterfaceWeather} from "./dto/interface.weatherts";
import {run} from "./vk.io/vk.io";

dotenv.config()
const bot = new TelegramBot(authorizationObject.telegram_token, {polling: true})

run().catch(console.log);


// // получаем погоду при старте бота
// let weatherPromise: Promise<InterfaceWeather> = getWeather()
//
//
// setInterval(() => {
//     //с интервалом обновляем  погоду
//     weatherPromise = getWeather()
// }, 1000 * 60 * 30)

bot.on('message', async (msg) => {
    const id: number = msg.chat.id;

    if (msg.text === '/start') {
        await mongoDbRepository.createNewUser(msg)
        bot.sendMessage(id, `${msg.chat.first_name}, welcome to my bot`)
    }
    // if (msg.text === '/weather') {
    //     weatherPromise.then(weatherData => {
    //         if (weatherData) {
    //             bot.sendMessage(id, botMsg.weatherMsg(weatherData))
    //         }
    //     })
    //
    // }

})

bot.on("polling_error", (msg) => console.log(msg));
mongoMain().catch(err => console.log(err));
