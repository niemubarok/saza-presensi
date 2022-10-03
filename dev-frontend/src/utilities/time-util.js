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
    time: hours + ":" + minutes + ":" + seconds,
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

export const compareTime = (init, now, comparasion) => {
  if (comparasion == "equal") {
    return init == now;
  } else if (comparasion == "lt") {
    return init < now;
  } else if (comparasion == "gt") {
    return init > now;
  } else {
    return false;
  }
  // return getTime().hours > setTime(now).hours;
  // return getTime().hours ;
  // return setTime(7, 40, 0).hours;
};
