import TelegramBot from "node-telegram-bot-api";
import {mongoMain} from "./db.mongo.cloud/mongo.client";
import {authorizationObject} from "./authorization";
import {mongoDbRepository} from "./repository/mongoDbRepository";

const bot = new TelegramBot(authorizationObject.telegram_token, {polling: true})





bot.on('message', async (msg) => {
    const id: number = msg.chat.id;

    if (msg.text === '/start') {
        mongoDbRepository.createNewUser(msg)
        bot.sendMessage(id,`${msg.chat.first_name}, welcome to my bot`)
    }
    if(msg.text === '/погода'){
        bot.sendMessage(id,' а погода не работает')
    }

})



mongoMain().catch(err => console.log(err));
