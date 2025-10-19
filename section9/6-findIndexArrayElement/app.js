const points = [70, 75, 25, 35, 10, 80, 27];
console.log(points);
const arrayIndexFind=points.findIndex(point=>point ==35);
console.log(arrayIndexFind);
points[arrayIndexFind]=45;
console.log(points);


const students=[
    {name:'Can',point:40},
    {name:'Seren',point:60},
    {name:'Anıl',point:30},
    {name:'Nezahat',point:100},
];

const objectIndex=students.findIndex(student => student.name== 'Anıl');
// students[objectIndex].name='Hakan';
students[objectIndex].point='90';

console.log(objectIndex);

console.log(students);

