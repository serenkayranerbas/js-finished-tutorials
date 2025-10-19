 
// const lessons=[
//     {name:'mathematics',puan:90},
//     {name:'physics',puan:30},
//     {name:'chemistry',puan:70},
// ]
 let student = {
  name: "Can",
  age: 29,
  email: "serenka@gmail.com",
  class: 12,
  lessons: [
    {name:'mathematics',score:90},
    {name:'physics',score:30},
    {name:'chemistry',score:70},
],
  login() {
    console.log("Öğrenci giriş yaptı");
  },
  logout() {
    console.log("Öğrenci çıkıs yaptı");
  },
  printLessons() {
    console.log(this.lessons);
    // console.log(this);
    this.lessons.forEach(lesson => {
      console.log(lesson.name,lesson.score);
    });
   
  },
};
console.log(typeof student);
window.console.log(this);
student.printLessons();

// JavaScript’te { key: value, ... } şeklinde tanımladığın her şey bir Object türünde olur.
