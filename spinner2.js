let time = 100;
const spinnerArms = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const spinner = (time, arms) => {
  while (time <= 3400) {
    arms.forEach(arm =>{
      setTimeout(() => {
        process.stdout.write(arm);
      }, time);
      time += 200;
    });
    spinner(time, arms);
  }
};

spinner(time, spinnerArms);