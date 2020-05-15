//The general GET request (all books)
class RequestGet {
  async get(url) {
    const response = await fetch(url);
    const data = response.json();
    return data;
  }
}

function getQuotes() {
  const req = new RequestGet();
  req.get('http://localhost:3000/api/quotes/')
    .then(data => {
      printBooks(data)
    })
    .catch(err => console.log(err));
}

//Rendering all quotes
function printQuotes(data) {
  const row = document.querySelector('.row')
  data.forEach(element => {
    const card = printSingleBook(element)
    row.prepend(card)
  });
}

function getUsers() {
  const req = new RequestGet();
  req.get('http://localhost:3000/api/users/')
    .then(data => {
      printUsers(data)
    })
    .catch(err => console.log(err));
}

//Rendering all users
function printQuotes(data) {
  const row = document.querySelector('.row')
  data.forEach(element => {
    const card = printSingleBook(element)
    row.prepend(card)
  });
}


let initListOfQuotes = (data) => {
  if (initQuoteList) {
    document.getElementById('init-quoteList').replaceWith(initQuoteList);
    console.log('???', data)
    return;
  }

  initQuoteList = document.getElementById('quoteList');
  Object.keys(data).forEach((key) => {
    const li = quoteSaver(data[key]);
    console.log('???', li)
    initQuoteList.appendChild(li);
  });
};




// Show the user´s name
  let userName = 'Madonna'
  document.getElementById('user-name').innerHTML = userName


let initQuoteList

// Create a new list item when clicking on the "Save quotes" button
function quoteSaver() {
  event.preventDefault()
  
  const li = document.createElement("li");
  let inputValue = document.getElementById("myQuotes").value;
  let t = document.createTextNode(inputValue);
  console.log(inputValue)

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("quoteList").appendChild(li);
  }
  document.getElementById("myQuotes").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  }
}





