class User {           
    constructor(fullname, email, password) {
      this.fullname = fullname
      this.email = email
      this.password = password
    }
    login(email, password) {
      if (this.email === email && this.password === password) {
        console.log('Login bem-sucedido!')
      } else {
        console.log('Login falhou. Verifique suas credenciais.')
      }
    }
  }
  
  const user = new User('Everson Sousa', 'evs@example.com', '123456')
  user.login('evs@example.com', '123456')
