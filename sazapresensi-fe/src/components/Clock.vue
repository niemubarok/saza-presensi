<template>
  <div>
    <p style="margin-bottom: -50px" class="text-white">{{ date }}</p>
    <h4 class="text-weight-bolder text-yellow-10">
      {{ hours }}<span class="text-grey">:</span>{{ minutes
      }}<span class="text-grey">:</span>{{ seconds }}
    </h4>

    <!-- {{ dateTime() }} -->
  </div>
</template>

  <script setup>
import { onMounted, ref } from "vue";
import { compareTime, getTime, setTime } from "src/utilities/time-util.js";

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const date = ref("");

const setClock = () => {
  date.value = getTime().date;
  hours.value = getTime().hours;
  minutes.value = getTime().minutes;
  seconds.value = getTime().seconds;
};

const timer = () => {
  setInterval(() => setClock(), 1000);
};

onMounted(() => {
  // console.log(compareTime());
  timer();
});
</script>
