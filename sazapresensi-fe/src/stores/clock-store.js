import { defineStore } from "pinia";

export const useClockStore = defineStore("clock", {
  state: () => ({
    number: 0,
    clocks: [
      {
        id: 0,
        start: "07:40",
        end: "08:40",
      },
      {
        id: 1,
        start: "08:41",
        end: "10:30",
      },
      {
        id: 2,
        start: "10:31",
        end: "12.10",
      },
    ],
  }),
  getters: {
    getClockById: (state) => {
      return (id) => state.all.find((val) => val.id == id);
    },
  },
  actions: {},
});
