import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import StudentActivity from "App/Models/StudentActivity";

export default class extends BaseSeeder {
  public async run() {
    await StudentActivity.updateOrCreateMany("id", [
      {
        id: 1,
        name: "Jamaah Subuh",
        start: "04:30:00",
        end: "05:00:00",
        order: 1,
      },
      {
        id: 2,
        name: "Pengajian Subuh",
        start: "05:30:00",
        end: "07:00:00",
        order: 2,
      },
      {
        id: 3,
        name: "Sekolah Pagi",
        start: "07:40:00",
        end: "12:10:00",
        order: 3,
      },
      {
        id: 4,
        name: "Jamaah Zuhur",
        start: "12:20:00",
        end: "12:59:00",
        order: 4,
      },
      {
        id: 5,
        name: "Sekolah Siang",
        start: "13:00:00",
        end: "14:20:00",
        order: 5,
      },
      {
        id: 6,
        name: "Jamaah Ashar",
        start: "15:16:30",
        end: "16:00:00",
        order: 6,
      },
      {
        id: 7,
        name: "Jamaah Maghrib",
        start: "17:30",
        end: "19:20:00",
        order: 7,
      },
      {
        id: 8,
        name: "Muhadhoroh",
        start: "19:40:00",
        end: "21:30:00",
        order: 8,
      },
      {
        id: 9,
        name: "Muwajahah",
        start: "19:40",
        end: "21:30:00",
        order: 8,
      },
      {
        id: 10,
        name: "Tidur",
        start: "22:00:00",
        end: "22:20:00",
        order: 10,
      },
    ]);
  }
}
