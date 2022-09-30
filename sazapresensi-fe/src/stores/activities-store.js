import { defineStore } from "pinia";
import { ref } from "vue";

export const useStudentAtivitiesStore = defineStore("StudentAtivities", {
  state: () => ({
    all: ref([
      {
        id: 1,
        name: "Jamaah Subuh",
        location: "kelas",
        start: "04:30:00",
        end: "05:00:00",
        time_order: 1,
      },
      {
        id: 2,
        name: "Pengajian Subuh",
        location: "kelas",
        start: "05:30:00",
        end: "07:00:00",
        time_order: 2,
      },
      {
        id: 3,
        name: "Sekolah Pagi",
        location: "kelas",
        start: "07:40:00",
        end: "12:10:00",
        time_order: 3,
      },
      {
        id: 4,
        name: "Jamaah Zuhur",
        location: "kelas",
        start: "12:20:00",
        end: "12:59:00",
        time_order: 4,
      },
      {
        id: 5,
        name: "Sekolah Siang",
        location: "kelas",
        start: "13:00:00",
        end: "14:20:00",
        time_order: 5,
      },
      {
        id: 6,
        name: "Jamaah Ashar",
        location: "kelas",
        start: "15:00:00",
        end: "16:00:00",
        time_order: 6,
      },
      {
        id: 7,
        name: "Jamaah Maghrib",
        location: "kelas",
        start: "17:30",
        end: "19:20:00",
        time_order: 7,
      },
      {
        id: 8,
        name: "Muhadhoroh",
        location: "kelas",
        start: "19:40:00",
        end: "21:30:00",
        time_order: 8,
      },
      {
        id: 9,
        name: "Muwajahan",
        location: "kelas",
        start: "19:40",
        end: "21:30:00",
        time_order: 8,
      },
      {
        id: 10,
        name: "Tidur",
        location: "kelas",
        start: "22:00:00",
        end: "22:20:00",
        time_order: 10,
      },
    ]),
  }),
  getters: {
    getStudentScheduleByNis: (state) => {
      return (nis) => state.all.find((val) => val.nis == nis);
    },
  },
  actions: {},
});
