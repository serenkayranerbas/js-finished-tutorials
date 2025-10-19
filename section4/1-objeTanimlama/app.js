let student={
    name:'Can',
    age:29,
    email:'serenka@gmail.com',
    class:12,
    lessons:['mathematics','physics','chemistry']
}

console.log(student);
console.log(student.age);
//property e ulaşma 1.yöntem
student.age=20;
console.log(student.age);
//property e ulaşma 2.yöntem
console.log(student['age']);
console.log(student['email']);
student['email']='serenerbas357@gmail.com';
console.log(student['email']);

console.log(typeof student);
