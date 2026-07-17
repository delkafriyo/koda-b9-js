function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      // untuk mengecek status response
      if (!response.ok) {
        throw "Terjadi Error";
      }
      // mengubah bentuk data kedalam JSON (Javascript Object Notation)
      return response.json();
    })
    .then((data) => {
      const upEmail = [];
      let splitEmail = [];
      let apEmail = [];
      for (let i = 0; i < data.length; i++) {
        upEmail.push(data[i].email);
      }

      // Method toLowerCase()
      let emailToLower = [];
      for (i = 0; i < upEmail.length; i++) {
        let arrEmail = upEmail[i].toLowerCase();
        emailToLower.push(arrEmail);
      }
      console.log(emailToLower);

      // Manual toLowerCase
      for (i = 0; i < upEmail.length; i++) {
        let arrEmail = upEmail[i].split("");
        splitEmail.push(arrEmail);
      }

      let result = [];
      for (i = 0; i < splitEmail.length; i++) {
        let exEmail = splitEmail[i];

        for (let k = 0; k < exEmail.length; k++) {
          let asciCode = exEmail[k].charCodeAt(0);
          if (asciCode >= 65 && asciCode <= 90) {
            let hurufKecil = String.fromCharCode(asciCode + 32);
            exEmail.splice([k], 1, hurufKecil);
          }
        }
        let testToLower = splitEmail[i].join("");
        result.push(splitEmail[i].join(""));
      }

      console.log(result);
    })
    .catch((error) => console.log(error));
}

async function getDataAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // untuk mengecek status response
    if (!response.ok) {
      throw "Terjadi Error";
    }
    // mengubah bentuk data kedalam JSON (Javascript Object Notation)
    const data = await response.json();
    const upEmail = [];
    let splitEmail = [];
    let apEmail = [];
    for (let i = 0; i < data.length; i++) {
      upEmail.push(data[i].email);
    }

    // Method toLowerCase()
    let emailToLower = [];
    for (i = 0; i < upEmail.length; i++) {
      let arrEmail = upEmail[i].toLowerCase();
      emailToLower.push(arrEmail);
    }
    console.log(emailToLower);

    // Manual toLowerCase
    for (i = 0; i < upEmail.length; i++) {
      let arrEmail = upEmail[i].split("");
      splitEmail.push(arrEmail);
    }

    let result = [];
    for (i = 0; i < splitEmail.length; i++) {
      let exEmail = splitEmail[i];

      for (let k = 0; k < exEmail.length; k++) {
        let asciCode = exEmail[k].charCodeAt(0);
        if (asciCode >= 65 && asciCode <= 90) {
          let hurufKecil = String.fromCharCode(asciCode + 32);
          exEmail.splice([k], 1, hurufKecil);
        }
      }
      let testToLower = splitEmail[i].join("");
      result.push(splitEmail[i].join(""));
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

getDataAsync();
