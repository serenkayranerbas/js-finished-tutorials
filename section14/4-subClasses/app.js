class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    console.log(`${this.username} giriş yaptı.`);
    return this;
    // return `${this.username} giriş yaptı.`
  }
   logout() {
    console.log(`${this.username} çıkış yaptı.`)
    return this;
  }
}
class Admin extends User{
  constructor(username,email,title){
    super(username,email,title);
    this.title=title;
  }
  deleteUser(userArrived){
    users =users.filter(user=> user.username !== userArrived.username);

  }
}

const userOne = new User("Seren", "seren@gmail.com");
const userTwo = new User("Kayra", "kayra@gmail.com");
const userThree = new Admin("Öykü", "oyku@gmail.com");


console.log(userThree);
