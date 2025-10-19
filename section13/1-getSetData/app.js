localStorage.setItem("name1", "Seren");
localStorage.setItem("age", 26);

// ? Localstorage'dan verileri alma yöntemi
let name1 = localStorage.getItem("name1");
let age = localStorage.getItem("age");
console.log(name1, age);

// ? Update yapma yöntemi
localStorage.setItem("name1", "Anıl Can");
localStorage.age = 30;


name1=localStorage.getItem("name1");
age=localStorage.getItem("age");
console.log(name1, age);
