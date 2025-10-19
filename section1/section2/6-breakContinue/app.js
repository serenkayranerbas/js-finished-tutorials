const notes=[15, 45,32,0,100,90,7];

for(let i=0; i<notes.length;i++){

  if(notes[i]===32){
    continue;// bundan sonrayı atla, döngünün başına dön, i++ yapılır
  }
  console.log(notes[i]);
  
  if(notes[i]===100){
    console.log("Bravo en yüksek notu sen aldın");
    break;//döngü buraya gelince tekrar i yi arttırmaz
  }
}