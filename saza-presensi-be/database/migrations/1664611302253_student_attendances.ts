import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'student_attendances'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('student_nis', 16)
      table.string('location_id').references('locations.id')
      table.date('date')
      table.time('in')
      table.time('out')
      table.string('status', 15)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
