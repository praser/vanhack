class User {
  constructor(userData) {
    this.name = userData.name;
    this.email = userData.email;
    this.apiKey = userData.api_key;
  }

  save() {
    localStorage.setItem('name', this.name);
    localStorage.setItem('email', this.email);
    localStorage.setItem('apiKey', this.apiKey);
  }

  logout() {
    localStorage.clear()
  }
}

export default User