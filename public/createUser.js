

// Create new user
function newLoggedInUser() {
  let myName = document.getElementById('register-name')
  console.log(myName.value)
  let myPassword = document.getElementById('register-password')
  const request = new RequestPost()
  request.post('http://localhost:3000/api/users/register', { name: myName.value, password: myPassword.value })
    .then(response => console.log(response), location.reload())
    .catch(err => console.log(err))
}

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


function login() {
  let myName = document.getElementById('login-name')
  console.log(myName.value)
  let myPassword = document.getElementById('login-password')
  const request = new RequestPost()
  request.post('http://localhost:3000/api/users/login', { name: myName.value, password: myPassword.value })
    .then(response => console.log(response.req.session.user), 
    //show the home button here

    )
    .catch(err => console.log(err))
}



//NEXT STEP. 
//Work on the quotelist.js
// 1. use the get call and se with user that is logged in. 
// 2. try to get all the diffrent CRUDs for quotes to work, in small steps. 
// ----> !!Check ms -bookshelf for help! 