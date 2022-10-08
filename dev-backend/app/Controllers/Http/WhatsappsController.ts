import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import { create, Whatsapp } from "venom-bot";

export default class WhatsappsController {
  public async index({}: HttpContextContract) {
    create({ session: "sessiontest" })
      .then((client) => start(client))
      .catch((error) => console.log(error));

    const start = async (client: Whatsapp) => {
      await client
        .sendText("6285524914191@c.us", "Hallo")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
