import { defineStore } from "pinia";

export const useStudentStore = defineStore("student", {
  state: () => {
    students: [
      {
        nis: "0012421387",
        name: "Rian",
        gender: "L",
        birthdate: "26-03-1996",
        phone_1: "0851511315",
        phone_2: "",
        photo: "",
        status: "aktif",
      },
      {
        nis: "0009107839",
        name: "Husni",
        gender: "L",
        birthdate: "26-03-1996",
        phone_1: "0851511315",
        phone_2: "",
        photo: "",
        status: "tidak aktif",
      },
    ];
  },
  getters: {},
  actions: {},
});
