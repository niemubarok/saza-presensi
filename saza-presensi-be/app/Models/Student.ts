import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public nis: String

  @column({columnName:'class_id'})
  public class_id:String

  @column({columnName:'name'})
  public name:String

  @column({columnName:'gender'})
  public gender:String

  @column({columnName:'birthday'})
  public birthday:Date

  @column({columnName:'phone_1'})
  public phone_1:Number

  @column({columnName:'phone_2'})
  public phone_2:Number

  @column({columnName:'photo'})
  public photo:String

  @column({columnName:'status'})
  public status:String


}
