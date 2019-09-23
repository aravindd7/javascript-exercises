// Asked by Apple

// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

const scheduleJob = (f, n) => {
  console.log(1, 'scheduling job');
  setTimeout(() => f(), n);
}

scheduleJob(() => console.log(2, 'executing job 1'), 2000);
scheduleJob(() => console.log(2, 'executing job 2'), 500);