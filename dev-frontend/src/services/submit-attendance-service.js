import { useAttendancesStore } from "src/stores/attendances-store";
import { useStudentScheduleStore } from "src/stores/studentSchedule-store";
import { useScheduleStore } from "src/stores/schedule-store";
import { useSettingStore } from "src/stores/setting-store";
import { useClockStore } from "src/stores/clock-store";
import AttendanceDialog from "src/components/AttendanceDialog.vue";
import { useStudentStore } from "src/stores/student-store";
import { Notify, Dialog } from "quasar";
import { ref } from "vue";
import { compareTime, getTime } from "src/utilities/time-util.js";
import { useStudentAtivitiesStore } from "src/stores/student-activities-store";

const useStudentAtivities = useStudentAtivitiesStore();
const useStudentSchedules = useStudentScheduleStore();
const useSchedules = useScheduleStore();
const useAttendances = useAttendancesStore();
const useStudents = useStudentStore();

export const submit = (input) => {
  const successAudio = new Audio("src/assets/audio/success_notification.wav");

  // console.log(useStudentAtivitiesStore().getStudentActivitiesByOrder(1));
  const student = useStudents.getStudentByNis(input);
  const studentSchedule = useStudentSchedules.getStudentScheduleByNis(input);

  const schedule = useSchedules.getScheduleById(studentSchedule?.schedule_id);

  const isStudent = student?.nis == input;
  const locationId = localStorage.getItem("location");

  const isRightClass = schedule?.class_id === locationId.toString();
  const activity = () => useStudentAtivities.getActivityByTime("14:00:00");

  const attendee = ref({
    student_nis: input,
    class_id: locationId,
    activity_id: localStorage.getItem("activityId"),
    date: getTime().date,
    in: getTime().time,
    status: "late",
  });

  //cek apakah dia student
  if (isStudent) {
    //cek apakah lokasi dia absen sudah benar

    if (isRightClass == false) {
      Notify.create({
        message: "Kelas salah",
        type: "negative",
        position: "center",
        classes: "q-px-xl",
      });
    } else {
      successAudio.play();
      attendee.value.name = student?.name;
      attendee.value.activity = activity().name;

      useAttendances.addAttendance(attendee.value);
      const dialog = Dialog.create({
        progress: true,
        component: AttendanceDialog,
        componentProps: {
          name: attendee.value.name,
          // in: attendee.value.in,
          // out: attendee.value.out,
          // status: attendee.value.status,
        },
      });
      dialog.update();
      setTimeout(() => {
        dialog.hide();
      }, 2000);
    }
    // else if () {

    // }
  } else {
    console.log("teacher");
  }
};
