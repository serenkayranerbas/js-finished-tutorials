const points = [70, 75, 25, 35, 10, 80, 27];

const highPoint=points.find(point=>{
    return point>90;
});
console.log(highPoint);