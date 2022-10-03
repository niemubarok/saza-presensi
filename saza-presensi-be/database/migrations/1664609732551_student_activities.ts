import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'student_activities'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('location_id').references('id').inTable('locations')
      table.string('start')
      table.string('end')
      table.integer('order')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
