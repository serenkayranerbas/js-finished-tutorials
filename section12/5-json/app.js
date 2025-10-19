const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request,request.readyState);

    if (request.readyState === 4 && request.status === 200) {
      // console.log(request.responseText);
      const data=JSON.parse(request.responseText);
     callback(undefined,data);
    } else if (request.readyState === 4) {
      // console.log("Başarılı cevap alamadık!");
       callback('Başarılı cevap alamadık!',undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};
getTodos((err,data)=>{
// console.log(err,data);
if(err){
  console.log(err);
}
else{
  console.log(data);
}
});
