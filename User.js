class User {           
    constructor(fullname, email, password) {
      this.fullname = fullname
      this.email = email
      this.password = password
    }
    login(email, password) {
      if (this.email === email && this.password === password) {
        console.log('Login sucess!')
      } else {
        console.log('Login failed!')
      }
    }
  }
  
  const user = new User('Everson Sousa', 'evs.link@email.com', '123456')
  user.login('evs.link@email.com', '123456')
