const userOne={
    username:'Can',
    email:'ccc@hotmail.com',
    login(){
        console.log('Can Boz giriş yaptı')
    },
    logout(){
        console.log('Can Boz çıkış yaptı')
    },
};

const userTwo={
    username:'Anıl Can',
    email:'anseria@hotmail.com',
    login(){
        console.log('Anıl Can giriş yaptı')
    },
    logout(){
        console.log('Anıl Can çıkış yaptı')
    },
};


console.log(userOne.email,userOne.username);
userOne.login();

console.log(userTwo.email,userTwo.username);
userTwo.login();