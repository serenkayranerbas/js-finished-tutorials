const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("Başarılı cevap alamadık!");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("example/can.json")
  .then((data) => {
    console.log("Promise1", data);
    return getTodos("example/anils.json");
  })
  .then((data) => {
    console.log("Promise2", data);
    return getTodos("example/seren.json");
  }) //example/seren.js bu yanlışsa 2.ye girmez sadece 1. si çalışır. Yan
  //Yanlış url e istek atarsak çalışmaz.Ondan sonrakiler çalışmaz.
  .then((data) => {
    console.log("Promise3", data);
  })
  .catch((err) => {
    console.log(err);
  });
