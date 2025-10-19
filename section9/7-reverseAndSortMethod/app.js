
const names=['Can','Tuba','Elif','Hakan','Osman'];
names.sort();
console.log(names);
names.reverse();
// console.log(names);
const points = [70, 75, 25, 3, 10, 80, 27];
// points.sort();
// points.reverse();

points.sort((a,b)=> a-b); //a dan b ye sıralar. küçükten büyüğe
console.log(points);//b den a ya sıralar. büyükten küçüğe sıralar

points.sort((a,b)=> b-a); 
console.log(points);


const students=[
    {name:'Can',point:40},
    {name:'Seren',point:60},
    {name:'Anıl',point:30},
    {name:'Nezahat',point:100},
];

// students.sort((a,b) => {
//     if(a.point>b.point){
//         return -1;
//     }
//     else if(b.point>a.point){
//         return 1;
//     }
//      else {
//         return 0;
//     }
// });
students.sort((a,b)=>b.point -a.point);
console.log(students);

