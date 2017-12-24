class User {
  constructor(userData = {}) {
    if(localStorage.getItem('apiKey') === null) {
      this.name = userData.name;
      this.email = userData.email;
      this.apiKey = userData.api_key;
    }else{
      this.name = localStorage.getItem('name');
      this.email = localStorage.getItem('email');
      this.apiKey = localStorage.getItem('apiKey');
    }
  }

  save() {
    localStorage.setItem('name', this.name);
    localStorage.setItem('email', this.email);
    localStorage.setItem('apiKey', this.apiKey);
  }

  logout() {
    localStorage.clear()
  }

  loggedIn() {
    const teste =  (localStorage.getItem('apiKey') === null); 
    return teste
    //return this.apiKey !== undefined;
  }
}

export default User