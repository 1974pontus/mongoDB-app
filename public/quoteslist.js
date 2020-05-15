//The general GET request (all quotes)
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

//LOGIN - Spara användaren och dess quotes
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

// let initQuoteList
// let printQuotes = (data) => {
//   if (initQuoteList) {
//     document.getElementById('quoteList').replaceWith(initQuoteList);
//     console.log('1234', data)
//     return;
//   }

//   initQuoteList = document.getElementById('quoteList');
//   Object.keys(data).forEach((key) => {
//     const li = quoteSaver(data[key]);
//     console.log('???', li)
//     initQuoteList.appendChild(li);
//   });
// };

// // function getUsers() {
// //   const req = new RequestGet();
// //   req.get('http://localhost:3000/api/users/')
// //     .then(data => {
// //       printUsers(data)
// //     })
// //     .catch(err => console.log(err));
// // }

// //Rendering all users
// // function printQuotes(data) {
// //   const row = document.querySelector('.row')
// //   data.forEach(element => {
// //     const card = printSingleBook(element)
// //     row.prepend(card)
// //   });
// // }






// // Show the user´s name
//   let userName = 'Elaine Benes'
//   document.getElementById('user-name').innerHTML = userName



// // Create a new list item when clicking on the "Save quotes" button
function createQuoteItem(quote) {
  const li = document.createElement("li");
  li.innerText = quote.content
  const button = document.createElement('button')
  button.innerHTML = `<button onclick="deleteQuote(event)">✕</button>`
  button.className = 'deleteQuoteButton'
  button.setAttribute("data-id", quote.id)
  li.appendChild(button)

  return li
}

class RequestDelete {
    async  delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
      });
      return "Delete successful";
    }
  }
function deleteQuote(event) {
  console.log(event.target) 
  const req = new RequestDelete();
  req.delete('http://localhost:3000/api/quotes/:id')
    .then(quotes => {
      console.log('Snälla radera denna')
    })
    .catch(err => console.log(err));
}



// // Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("li");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   let span = document.createElement("SPAN");
//   let txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// let close = document.getElementsByClassName("close");

// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     let div = this.parentElement;
//     div.style.display = "none";
//   }
// }





