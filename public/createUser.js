//***********POST*********************

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

// *************CREATE NEW USER**********
function newLoggedInUser() {
  let myName = document.getElementById('register-name')
  console.log(myName.value)
  let myPassword = document.getElementById('register-password')
  const request = new RequestPost()
  request.post('http://localhost:3000/api/users/register', { name: myName.value, password: myPassword.value })
    .then(response => console.log(response))//, location.reload())
    .catch(err => console.log(err))
}

// *************LOGGIN USER**********

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

//***********GET******************** */

class RequestGet {
  async get(url) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const data = await response.json();
    return data;
  }
}

function getQuotes() {
  const req = new RequestGet();
  req.get('http://localhost:3000/api/quotes')
    .then(quotes => {
      console.log('VISA ALLA QUOTS PÅ INDEX_SIDAN PLZ❤️')
      printQuotes(quotes)
    })
    .catch(err => console.log(err));
}
getQuotes()


//Rendering all quotes
function printQuotes(quotes) {
  const row = document.querySelector('#showAllQuoteList')
  quotes.forEach(quote => {
    const item = createQuoteItem(quote)
    row.prepend(item)
  });
}
// // Create a new list item when clicking on the "Save quotes" button
function createQuoteItem(quote) {
  
  const li = document.createElement("li");
  li.innerText = quote.content

  return li
}