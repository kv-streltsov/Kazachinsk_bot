import {Schema, model, connect} from 'mongoose';
import {InterfaceUser} from "../../dto/interface.user";

const userSchema =
    new Schema<InterfaceUser>({

    telegramId: {type: Number, required: true},
    firstName: {type: String, required: true},
    userName: {type: String, required: true},
    createDate: {type: String, required: true},
    isBot: {type: Boolean, required: true},
    counterRequest: {type: Number, required: false}
});


export const UserModel
    = model<InterfaceUser>('Users', userSchema);


