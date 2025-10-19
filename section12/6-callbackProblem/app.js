const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("Başarılı cevap alamadık!", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};
getTodos("example/can.json", (err, data) => {
  console.log(data);
  getTodos("example/anil.json", (err, data) => {
    console.log(data);
  });
  getTodos("example/seren.json", (err, data) => {
    console.log(data);
  });
});
//kod okunabilirliği zorlaştı. O yüzden callback kullalnılır
// sonra promise sonra async await kullanılır