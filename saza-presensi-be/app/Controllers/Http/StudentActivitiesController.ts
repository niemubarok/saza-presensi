import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import StudentActivity from "App/Models/StudentActivity";

export default class StudentActitiesController {
  public async index({ response }: HttpContextContract) {
    const activities = await StudentActivity.all();

    response.json(activities);
    response.status(200);
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
