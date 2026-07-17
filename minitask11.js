function john() {
  return new Promise((rs, rj) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        rs("John");
      } else {
        rej(new Error("Error"));
      }
    }, 1500);
  });
}

function ed() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        res("Ed");
      } else {
        rej(new Error("Error"));
      }
    }, 2000);
  });
}

function jane() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        res("Jane");
      } else {
        rej(new Error("Error"));
      }
    }, 500);
  });
}

john()
  .then((result) => {
    console.log(result);
    return ed();
  })
  .then((result) => {
    console.log(result);
    return jane();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function name() {
  try {
    console.log(await john());
    console.log(await ed());
    console.log(await jane());
  } catch (error) {}
}

name();
