<template>
  <div class="row text-center">
    <div class="column">
      <q-card
        class="fixed-top-left bg-dark text-center q-pt-md q-ma-md"
        style="width: 200px; height: 400px"
      >
        <q-img
          width="150px"
          class="z-top"
          alt="Quasar logo"
          src="~assets/IEC.png"
        />

        <!-- <q-separator color="grey-8" class="q-mt-md" /> -->
        <q-linear-progress
          dark
          rounded
          indeterminate
          color="grey-8"
          class="q-mt-sm"
        />

        <input
          v-model="inputValue"
          ref="input"
          type="text"
          class="bg-dark text-dark no-border no-outline"
          v-on:keyup.enter="submit"
        />
        <Clock />

        <div>
          <q-skeleton
            class="q-mx-xs vertical-middle"
            style="width: 190px; height: 100px; margin-top: -20px"
            bordered
            type="rect"
          >
            <!-- <q-card class="bg-yellow-2 rounded-borders q-py-xs"> -->
            <p class="text-yellow-4 q-mt-md">Belum ada Guru yang Absen</p>
            <!-- </q-card> -->
          </q-skeleton>
        </div>
        <q-separator color="grey-8" class="q-mt-md" />

        <div class="q-pt-md q-ml-md float-left">
          <q-chip size="xs" color="dark" text-color="white">
            <q-avatar color="green" text-color="white"></q-avatar>
            <span style="font-size: 10px"> Tepat Waktu </span>
          </q-chip>
          <!-- </div> -->
          <!-- <div class="float-left q-ml-md"> -->
          <q-chip size="xs" color="dark" text-color="white">
            <q-avatar color="red" text-color="white"></q-avatar>
            <span style="font-size: 10px"> Telat </span>
          </q-chip>
        </div>
      </q-card>
    </div>
    <!-- <AttendanceTable /> -->
    <div class="column">
      <AttendanceCardList />
    </div>
  </div>
  <div class="q-pa-md fixed-bottom" style="width: 100px">
    <!-- class="" -->
    <q-btn
      flat
      color="grey"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
    />
    <!-- :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'" -->
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";
import { onStartTyping, useArrayFind } from "@vueuse/core";
import Clock from "src/components/Clock.vue";
// import AttendanceTable from "src/components/AttendanceTable.vue";
import AttendanceCardList from "src/components/AttendanceCardList.vue";
import AttandeeCard from "src/components/AttandeeCard.vue";

import { useComponentStore } from "src/stores/component-store";
import { useAttendancesStore } from "src/stores/attendances-store";
import { useStudentScheduleStore } from "src/stores/studentSchedule-store";
import { useScheduleStore } from "src/stores/schedule-store";
import { useSettingStore } from "src/stores/setting-store";
import { useClockStore } from "src/stores/clock-store";
import AttendanceDialog from "src/components/AttendanceDialog.vue";

const useStudentSchedules = useStudentScheduleStore();
const useSchedules = useScheduleStore();
const useAttendances = useAttendancesStore();
// const componentState = useComponentStore();
const useSettings = useSettingStore();
const useClocks = useClockStore();

const $q = useQuasar();
const splitterModel = ref(20);

const inputValue = ref("");
const input = ref(null);

onStartTyping(() => {
  if (!input.value.active) {
    input.value.focus();
  }
});

const attendeeName = ref("");

const attendee = ref({
  id: inputValue.value,
  name: "Arina",
  class_id: "klsvii",
  date: new Date(2022, 9, 27),
  in: "10.20",
  out: "14.00",
  status: "late",
});

// const submit = () => {
//   const dialog = $q.dialog({
//     progress: true,
//     component: AttendanceDialog,
//     componentProps: {
//       name: attendee.value.name,
//       in: attendee.value.in,
//       out: attendee.value.out,
//       status: attendee.value.status,
//     },
//   });
//   dialog.update();
//   setTimeout(() => {
//     dialog.hide();
//   }, 2000);
// };
const submit = () => {
  const student = useStudentSchedules.getStudentScheduleByNis(inputValue.value);

  const schedule = useSchedules.getScheduleById(student?.schedule_id);

  const isStudent = student?.nis == inputValue.value;

  const isRightClass = schedule?.class_id == useSettings.class_id;
  if (isStudent) {
    if (isRightClass == false) {
      $q.notify({
        message: "Kelas salah",
        type: "negative",
        position: "center",
        classes: "q-px-xl",
      });
    } else {
      useAttendances.addAttendance(attendee.value);
      const dialog = $q.dialog({
        progress: true,
        component: AttendanceDialog,
        componentProps: {
          name: attendee.value.name,
          in: attendee.value.in,
          out: attendee.value.out,
          status: attendee.value.status,
        },
      });
      dialog.update();
      setTimeout(() => {
        dialog.hide();
      }, 10000);
    }
    // else if(){

    // }
  } else {
    console.log("teacher");
  }
  inputValue.value = "";
};
</script>
