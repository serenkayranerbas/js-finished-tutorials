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

const userOne = new User("Seren", "seren@gmail.com");
const userTwo = new User("Kayra", "kayra@gmail.com");
// console.log(userOne.login(), userTwo.logout());
userOne.login().logout();
userOne.login().logout().login();
//return this koymamızın en temel nedeni, aynı nesne üzerinden art arda (zincirleme) metotlar çalıştırabilmek
