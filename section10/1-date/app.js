const now=new Date();
console.log(now);
console.log(typeof now);

console.log('Year:',now.getFullYear());
console.log('Month:',now.getMonth ()+1);
console.log('Date:',now.getDate());//Ayın gününü (1–31 arası) döndürür.
console.log('Day:',now.getDay ());//haftanın gününü bir sayı olarak döndürür  0–6 aralığındadır.
console.log('Hours:',now.getHours ());//saat
console.log('Minutes:',now.getMinutes ());//saat
console.log('Seconds:',now.getSeconds());//saat

console.log('timestamp', now.getTime());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());