import { VK } from 'vk-io';
import {authorizationObject} from "../authorization";


const vk = new VK({
    token: authorizationObject.vk_token
});

export async function run() {
    const response = await vk.api.wall.get({
        owner_id: 1
    });

    console.log(response);
}

