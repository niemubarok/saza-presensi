import { ref } from "vue";

export const zeroPad = (n) => {
  return (n < 10 ? "0" : "") + n;
};

export const getTime = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const hours = zeroPad(currentDate.getHours());
  const minutes = zeroPad(currentDate.getMinutes());
  const seconds = zeroPad(currentDate.getSeconds());
  return {
    date,
    hours,
    minutes,
    seconds,
    time: hours + ":" + minutes,
  };
};

export const setTime = (h, m, s) => {
  const currentDate = new Date();
  currentDate.setHours(h, m, s);

  return {
    hours: zeroPad(currentDate.getHours()),
    minutes: zeroPad(currentDate.getMinutes()),
  };
};

export const compareTime = (init, now) => {
  return getTime().hours > setTime(7, 40, 0).hours;
  // return getTime().hours ;
  // return setTime(7, 40, 0).hours;
};
