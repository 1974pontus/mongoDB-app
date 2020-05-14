
class RequestPost {
  post(url, data) {
    let postObj = {
      method: 'POST',
      credentials: 'include',
      crossDomain: true,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
    return new Promise((resolve, reject) => {
      fetch(url, postObj)
        .then(response => response)
        .catch(err => reject(err));
    })
  }
}

// Create new user
function newLoggedInUser() {
  let myName = document.getElementById('register-name')
  console.log(myName.value)
  let myPassword = document.getElementById('register-password')
  const request = new RequestPost()
  request.post('http://localhost:3000/api/users/register', { name: myName.value, password: myPassword.value })
    .then(response => console.log(response))//, location.reload())
    .catch(err => console.log(err))
}




// login user
function login() {
  let myName = document.getElementById('login-name')
  console.log(myName.value)
  let myPassword = document.getElementById('login-password')
  const request = new RequestPost()
  request.post('http://localhost:3000/api/users/login', { name: myName.value, password: myPassword.value })
    .then(response => console.log(response.req.session.user)
    
    )
    .catch(err => console.log(err))
}



