import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Class from 'App/Models/Class'

export default class extends BaseSeeder {
  public async run () {

    await Class.updateOrCreateMany('id',[
      {
        id:'klsvii',
        name:"Kelas VII"
      }
    ])
  }
}
