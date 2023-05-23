import mongoose from 'mongoose'
import {authorizationObject} from "../authorization";


const MONGO_URL: string = `mongodb+srv://kvstreltsov:${authorizationObject.mongo_db.password}@kazachinskbot.fq3itoc.mongodb.net/KazachinskBot?retryWrites=true&w=majority`;

export async function mongoMain() {
    await mongoose.connect(MONGO_URL);
}


