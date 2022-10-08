import axios from "axios";
import { defineStore } from "pinia";
import { compareTime } from "src/utilities/time-util";
import { ref } from "vue";

export const useStudentAtivitiesStore = defineStore("StudentAtivities", {
  state: () => ({
    all: [],
  }),
  getters: {
    getStudentActivitiesByOrder: (state) => {
      return (order) => state.all.find((val) => val.time_order == order);
    },
    getActivityByTime: (state) => {
      const activity = (now) =>
        state.all?.find((val) => val.start <= now && val.end >= now);

      if (activity == undefined) {
        return false;
      }

      return activity;
    },
  },
  actions: {
    async getActivitiesByDayFromDB() {
      await axios
        .get(process.env.API + "/student/activities/day")
        .then((res) => {
          console.log(res.data);
          // this.all = res.data
        });
    },
  },
});
