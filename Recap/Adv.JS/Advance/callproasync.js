function roll(num, delay, next) {
  setTimeout(() => {
    console.log("Roll. no. is " + num);
    if (next) next();
  }, delay)
}
roll(12212, 1000, () => {
  console.log("wait its getting downloaded");
  roll(12312, 2000, () => {
    console.log("wait its getting downloaded");
    roll(12412, 3000, () => {
      console.log("wait its almost over");
      roll(12512, 4000);
    });
  });
});



function getRoll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll. No. is", num);
      resolve("Successfully Done");
    }, delay);
  });
}
getRoll(1, 1000).then(() => {
  getRoll(2, 2000).then(() => {
    getRoll(3, 30000);
  });
});

async function printRollNumbers() {
  await getRoll(1, 1000);
  await getRoll(2, 2000);
  await getRoll(3, 3000);
}
printRollNumbers();

