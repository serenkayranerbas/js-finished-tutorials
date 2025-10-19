
 let student = {
  name: "Can",
  age: 29,
  email: "serenka@gmail.com",
  class: 12,
  lessons: ["mathematics", "physics", "chemistry"],
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
      console.log(lesson);
    });
  },
};
console.log(typeof student);
window.console.log(this);
student.printLessons();

// JavaScript’te { key: value, ... } şeklinde tanımladığın her şey bir Object türünde olur.
