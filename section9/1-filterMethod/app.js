const points=[70,75,25,35,10,80,27];
//Filter methodu elemanları tek tek gezer bu koşul doğru ise bu elemanı geri döner . Bu koşul yanlışsa bu elemanı arrayden çıkartır.

const studentsPassed= points.filter((point,index)=>{
     console.log(point,index);
    return point >50;
   
})

console.log(studentsPassed);

const students=[
    {name:'Can',passed:true},
    {name:'Seren',passed:false},
    {name:'Anıl',passed:false},
    {name:'Nezahat',passed:true},
];

const passingStudents= students.filter(student=>{
    return !student.passed;
})
console.log(passingStudents);