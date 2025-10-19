function can(){
    console.log("Can");
}
can();
//opt ; = ``

const canboz=function(name="Can",surname="Boz"){
    // console.log('Ad:'+name+' Soyad:'+surname);
    console.log(`Ad Soyad: ${name} ${surname}`);

}
canboz();
canboz("Hakan","Enis");