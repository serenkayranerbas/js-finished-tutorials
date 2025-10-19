function readName(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    try {
      xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        }
      });
    } catch {
      reject(console.error());
    }

    xhr.open("GET", url);
    xhr.send();
  });
}

// readName("example/anil.json")
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log(error)})

const getUsers = (resource) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //xhr nesneyi oluşturduk
    xhr.addEventListener("readystatechange", () => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
    xhr.open("GET", resource);
    xhr.send();
  });
};

const getCommentsByUserId = (resource) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //xhr nesneyi oluşturduk
    xhr.addEventListener("readystatechange", () => {
      try {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          resolve(data);
        }
      } catch (error) {
        reject(error);
      }
    });
    xhr.open("GET", resource);
    xhr.send();
  });
};

// getUsers("https://jsonplaceholder.typicode.com/users/3")
//   .then((data) => {
//     // data.forEach(user => {
//     //     console.log(user.name);
//     //     console.log(user.username);
//     //     console.log(user.email);
//     // }); //?FOREACH İLE YAZDIRILIRSA
//     console.log(data);
//     return getCommentsByUserId(
//       `https://jsonplaceholder.typicode.com/comments/${data.id}`
//     )
//   }).then((respon) => {
//       console.log(`Comment ${JSON.stringify(respon)}`);
//       console.log(respon);
//     })
//   .catch((error) => {
//     console.log(error);
//   });


  const p1= Promise.resolve("Birinci promise başarılı")
  const p2= Promise.resolve("İkinci promise başarılı")
  const p3= new Promise((resolve, reject)=>{
    resolve("Üçüncü promise başarılı!")
  })
  //?Birden fazla promise vardır. durumlarını yönetmek için kullanılır promise all kullanılır.biri bile hataylıyca catch çalışır.
  Promise.all([p1,p2,p3])

  .then((res)=>{
console.log(res);
  }).catch(()=>{

  })