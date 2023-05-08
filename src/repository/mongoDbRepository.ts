import {UserModel} from "../db.mongo.cloud/models/users.model";
import {InterfaceUser} from "../dto/interface.user";

export const mongoDbRepository = {
    createNewUser: async (data: any) => {

        const findUser = await UserModel.findOne({telegramId: data.chat.id})

        if (findUser === null) {
            const newUser = new UserModel({
                telegramId: data.chat.id,
                firstName: data.chat.first_name,
                userName: data.chat.username,
                createDate: new Date(),
                isBot: data.from.is_bot,
                counterRequest: 1
            })

            await newUser.save();
            console.log('user create')
            return

        } else {
            console.log('user already exists')
            mongoDbRepository.addRequestCounter(data.chat.id)
        }

    },
    addRequestCounter: async (id: number) => {
        UserModel.updateOne({telegramId: id},
            {$inc: {counterRequest: +1}}).then();
    },
}

