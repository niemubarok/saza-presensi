import axios from "axios";
import { defineStore } from "pinia";

export const useAttendancesStore = defineStore("attendance", {
  state: () => ({
    number: 0,
    attendances: [],
  }),
  getters: {
    getAttendance: (state) => {
      return state.attendances.sort();
    },
  },
  actions: {
    addAttendance(attendee) {
      // console.log(attendee);
      axios
        .post(process.env.API + "student/attendances/create", {
          data: attendee,
        })
        .then((res) => {
          console.log(res.data);
          if (res.status == 201) {
            this.attendances.unshift(res.data.data);
          } else {
            console.log(res);
          }
        });
    },
    getAttendancecFromDB() {
      axios.get(process.env.API + "student/attendances").then((res) => {
        res.data.data.forEach((data) => this.attendances.unshift(data));
      });
    },
  },
});
