import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class StudentAttendance extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public student_nis: String;

  @column()
  public activity_id: Number;

  @column()
  public class_id: String;

  @column()
  public date: Date;

  @column()
  public in: String;

  @column()
  public status: String;
}
