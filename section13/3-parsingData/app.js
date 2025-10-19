const variable=[
    {hobby:"swimming","person":"Anıl"},
    {hobby:"playing card","person":"Anıl"},
    {hobby:"take a trip","person":"Anıl"}
];

console.log(variable);
console.log(JSON.stringify(variable));
localStorage.setItem('todos',JSON.stringify(variable));

const storedData=localStorage.getItem('todos');
console.log(JSON.parse(storedData));