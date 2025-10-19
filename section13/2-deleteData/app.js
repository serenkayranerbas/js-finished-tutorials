localStorage.setItem("name1", "Seren");
localStorage.setItem("age", 26);

// ? Localstorage'dan verileri alma yöntemi
let name1 = localStorage.getItem("name1");
let age = localStorage.getItem("age");

console.log(name1,age);

localStorage.removeItem('name1');
localStorage.clear();
name1 = localStorage.getItem("name1");
age = localStorage.getItem("age");
console.log(name1,age);