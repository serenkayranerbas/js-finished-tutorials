class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }
  login() {
    return `${this.username} giriş yaptı.`
  }
   logout() {
    return `${this.username} çıkış yaptı.`
  }
}

const userOne = new User("Seren", "seren@gmail.com");
const userTwo = new User("Kayra", "kayra@gmail.com");
console.log(userOne.login(), userTwo.logout());
