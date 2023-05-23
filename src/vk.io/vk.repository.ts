import {vk} from "./vk.io";


enum idGroups {
    'kaz' = -170319700,
    'ens' = -42383055
}
export const vkRepository = {

    getWall: async (count: number = 50) => {

        const wallResponse = {
            kaz: await vk.api.wall.get({owner_id: -170319700, count: count}),
            ens: await vk.api.wall.get({owner_id: -42383055, count: count})
        }


        const wallFormat = {
            kaz: wallResponse.kaz.items.map(post => ({
                signer_id: post.signer_id,
                date: vkRepository._dateConvert(post.date),
                text: post.text
            })),

            ens: wallResponse.ens.items.map(post => ({
                signer_id: post.signer_id,
                date: vkRepository._dateConvert(post.date),
                text: post.text
            }))
        }


    },

    _dateConvert: (unixTime: number | undefined) => {
        if (unixTime === undefined) {
            return 'undefined'
        }

        const date = new Date(unixTime * 1000);

        const day = date.getDate()
        const month = "0" + (date.getMonth() + 1)
        const year = date.getFullYear()

        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();

        return day + '.' + month + '.' + year + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    }
}