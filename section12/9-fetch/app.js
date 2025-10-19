// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//??Fetch geriye promise dönüyor kullanım amacı:response resolve aslında

fetch("example/can.json")
  .then((response) => { 
    // console.log(response); //respınse tipinde promise veriyor ilk then ikinci the ile o dataya ulaşıırz
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });


  //?Fetch çalıştığında bir promise dönerBu Promise, HTTP isteğinin tamamlanmasını bekler.
  //*

fetch("example/can.json")
  .then(response => {
    return response.json()
  })  .then(data => {
    console.log(data);
  }).catch(err=>{
    console.log(err)
  })
  