let names = ["can", "rıdvan", "elif"];
// console.log(names[1]);
// names[1] = "Tuğce";
// console.log(names[1]);
let ages = [3, 18, 25, 50];
// console.log(ages[3]);
let rastgele = ["can", "anıl", 10, 15];
// console.log(rastgele);
// console.log(rastgele.length);

let tire = names.join("-");
console.log(tire);

let virgullu = names.join(",");
console.log(virgullu);

let sira = names.indexOf("elif");
console.log(sira);

let add = names.concat(["merve", "suna"]);
console.log(add);

let elemanEkle = names.push("Leyla");
console.log(names);
names.pop();//son eklenen elemanı kaldırır.
console.log(names);
names.pop();//son eklenen elemanı kaldırır.
console.log(names);
names.pop();//son eklenen elemanı kaldırır.
console.log(names);