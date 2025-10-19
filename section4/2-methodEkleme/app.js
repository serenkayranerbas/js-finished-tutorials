let student={
    name:'Can',
    age:29,
    email:'serenka@gmail.com',
    class:12,
    lessons:['mathematics','physics','chemistry'],
    login(){
        console.log("Öğrenci giriş yaptı");
    },
     logout(){
        console.log("Öğrenci çıkıs yaptı");
    }
}
console.log(typeof student);


//array içinde arrow function kullanılamaz.Regular function kullanılır normal düz () ya da function
//  login: function(){
//         console.log("Öğrenci giriş yaptı");
//     },
     
student.login();
student.logout();