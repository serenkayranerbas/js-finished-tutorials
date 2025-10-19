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

getTodos("example/canss.json")
  .then((data) => {
    console.log(data); 
  })
  .catch((err) => {
    console.log(err);
  });

// const getIt=()=>{
//   return new Promise((resolve,reject)=>{
//     //resolve("Başarılı Data");
//     reject("Başarısız Data");
//   })
// }

// getIt().then(data=>{
//   console.log("Başarılı",data);
// },(err=>{
//     console.log("Başarısız",err);
// }
// ));

// const getIt=()=>{
//   return new Promise((resolve,reject)=>{
//     resolve("Başarılı Data");
//     //reject("Başarısız Data");
//   })
// }

// getIt().then((data)=>{
//   console.log("Başarılı",data);
// }).catch((err)=>{
//   console.log("Başarısız",err);
//  });
const promise=new Promise((resolve,reject)=>{
  if(true){
    resolve("Promise başarılı");
  }else{
    reject("Promise başarısız");
  }
})
console.log(promise);