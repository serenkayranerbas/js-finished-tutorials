const points=[70,75,25,35,10,80,27];

const result=points.reduce((value,point)=>{
if(point>50){
    value++;
}
return value;
},0);
//value tek tek arttırılır point 50 den büyükse

console.log(result);

const students=[
    {name:'Can',point:20},
    {name:'Seren',point:40},
    {name:'Nezo',point:100},
    {name:'Can',point:60},
    {name:'Osman',point:55},
    {name:'Elif',point:95},
    {name:'Canan',point:69},
    {name:'Cengiz',point:90},

];
const canTotal=students.reduce((value,student)=>{
    if(student.name=='Can'){
        value+=student.point;
    }
    return value;
},0)
console.log(canTotal);
console.log(`Can'ın aldığı toplam puanlar ${canTotal}`);