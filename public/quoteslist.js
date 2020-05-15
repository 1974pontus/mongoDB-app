// *************GET****************

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
  req.get('http://localhost:3000/api/quotes/loggedInUser')
    .then(quotes => {
      console.log('jakten på quotes', quotes)
      printQuotes(quotes)
    })
    .catch(err => console.log(err));
}
getQuotes()

//Rendering all quotes
function printQuotes(quotes) {
  const row = document.querySelector('#quoteList')
  quotes.forEach(quote => {
    const item = createQuoteItem(quote)
    row.prepend(item)
  });
}

// *************POST****************

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
        .then(response => {
          console.log('come on')
          location.reload()
        })
        .catch(err => reject(err));
    })
  }
}

function quoteSaver() {
  let myQuotes = document.getElementById('myQuotes')
  console.log(myQuotes.value)
  const request = new RequestPost()
  request.post('http://localhost:3000/api/quotes', { content:  myQuotes.value  })
    .then(response => {
      console.log('anything')
    })
    .catch(err => console.log(err))
}

// *************PUT****************

function createQuoteItem(quote) {
  const li = document.createElement("li");
  li.innerText = quote.content

  const button = document.createElement('button')
  button.innerHTML = `<button onclick="deleteQuote(event)">✕</button>`
  button.className = 'deleteQuoteButton'
  button.setAttribute("data-id", quote._id)
  li.appendChild(button)

  const editButton = document.createElement('button')
  editButton.innerHTML = `<button id="edit" onclick="editQuote(event)">✄</button>`
  editButton.className = 'deleteQuoteButton'
  editButton.setAttribute("data-id", quote._id)
  li.appendChild(editButton)

  console.log(quote._id)

  return li
}

class RequestPut {
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => location.reload())
        .catch(err => reject(err));
    })
  }
}
    
function editQuote(event) {
  let text= event.target.parentNode.parentNode.innerText
  let quote = prompt('update your quote plz', `${text}`)
  if (quote != null) {
    const id = event.target.parentNode.getAttribute('data-id')
    console.log(event.target.parentNode) 
    console.log(quote)
    const req = new RequestPut
    req.put(`http://localhost:3000/api/quotes/${ id }`, {content: quote})
    .then(quotes => {
     location.reload()
      console.log('Snälla uppdatera denna citat')
    })
    .catch(err => console.log(err));
  }
  else {
    prompt('update your quote plz')
  }
}

// *************DELETE****************

class RequestDelete {
    async  delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      return "Delete successful";
    }
  }
function deleteQuote(event) {
  const id = event.target.parentNode.getAttribute('data-id')
  console.log(event.target.parentNode.getAttribute('data-id')) 
  const req = new RequestDelete();
  req.delete(`http://localhost:3000/api/quotes/${ id }`)
    .then(quotes => {
     location.reload()
      console.log('Snälla radera denna')
    })
    .catch(err => console.log(err));
}






