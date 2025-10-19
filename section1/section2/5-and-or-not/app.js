// &&  ||(opt+<)
const newPassword="adsasaa!";
console.log(newPassword.length);
if(newPassword.length>=12 || newPassword.includes('!'))
{
  console.log("Şifrem baya güçlü");
  
}
else if(newPassword.length>=8){
  console.log("Şifre yeterli");
}
else{
  console.log("Şifreyi yeniden giriniz.");
}
const control=false;
if(!control)
{
  console.log("Kontrol Başarılı!");
}