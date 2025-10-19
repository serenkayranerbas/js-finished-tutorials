
const students=[
    {name:'Can',point:40},
    {name:'Seren',point:60},
    {name:'Anıl',point:30},
    {name:'Osman',point:100},
    {name:'Hakan',point:45},
    {name:'Deniz',point:70},
];
/*Puanı 50 den düşük olan öğrencilere
15 puan eklemek istiyorum.
Yeni notlarıyla birlikte sadece puanı düşük olanları yeniden bastırmak istiyoruz.
*/

//Adım 1: Önce puanı 50 den düşük olanları bul.
// const newNotes=students.filter(student=>student.point<50);
// console.log(newNotes);

// const plusPoint=newNotes.map(student=>{
//     return `${student.name} adlı öğrencinin yeni notu ${student.point+15}`;
// })

// console.log(plusPoint);


const newNotes=students.filter(student=>student.point<50)
.map(student=>`${student.name} adlı öğrencinin yeni notu ${student.point+15}`);
// .map(student=>student.point+15);

console.log(newNotes);