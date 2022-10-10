import { create, Whatsapp } from "venom-bot"

export const createInstance = async () => {
    const client = await create("sessiontest", (base64Qr, asciiQR, attempts) => {
        console.log(base64Qr);
    })

    return client
}

export const start = async (client: Whatsapp) => {
    client.sendText("6285524914191@c.us", "test message")
        .then((res) => {
            console.log(res);

        })
}