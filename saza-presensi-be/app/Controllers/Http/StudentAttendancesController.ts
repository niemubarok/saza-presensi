import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import StudentAttendance from "App/Models/StudentAttendance";

export default class StudentAttendancesController {
  public async index({ response }: HttpContextContract) {
    const studentAttendances = await StudentAttendance.all();

    response.json(studentAttendances);
    response.status(200);
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
