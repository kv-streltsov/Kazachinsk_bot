import {VK} from 'vk-io';
import {authorizationObject} from "../authorization";
import {vkRepository} from "./vk.repository";

export const vk = new VK({
    token: authorizationObject.vk_token
});





export async function run() {
    const a = await vkRepository.getWall()
}


