import axios from 'axios';

const HOST_URL = 'https://conduit.productionready.io/api';

class AuthService {

  login(email, pass){
    return axios.post(HOST_URL+'/users/login', {
      user:{
        email: email,
        password:pass 
      }
    })
      .then(res => {
        if (res.data.user){
          localStorage.setItem("user", JSON.stringify(res.data))
        }
        return res.data
      })
      .catch(err => alert(err))
    };

  logOut(){
    localStorage.removeItem("user");
  }

  register(email, id, pass){
    console.log(`Checking registration form email: ${email}, id: ${id} and password is ${pass}`)
    return axios.post(HOST_URL+'/users', {
      user:{
        email:email,
        password:pass,
        username:id
      }
    })
      .then(res => res.data)
      .catch(err => {
        if(err.response.data.errors.username){
          return alert('User Name '+ err.response.data.errors.username)
        }
        if (err.response.data.errors.email){
          return alert('Email '+ err.response.data.errors.email)
        }
        console.log(err.response)
      })
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('user'))
  }

  isLoggedIn() {
    return this.getCurrentUser();
  }
}

export default new AuthService();
