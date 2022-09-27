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
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);
const date = ref("");

const setTime = () => {
  const zeroPad = (n) => {
    return (n < 10 ? "0" : "") + n;
  };

  const currentDate = new Date();
  date.value = currentDate.toLocaleDateString();
  hours.value = zeroPad(currentDate.getHours());
  minutes.value = zeroPad(currentDate.getMinutes());
  seconds.value = zeroPad(currentDate.getSeconds());
};

const timer = () => {
  setInterval(() => setTime(), 1000);
};

onMounted(() => {
  timer();
});

// onBeforeUnmount() {
//     clearInterval(timer);
//   }
//
</script>
