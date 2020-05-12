let quotes = ['carpe diem', 'efter regn kommer solsken', 'expelliarmo']
let user = ['per karlsson']
let cardContainer

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
    close[i].onclick = function() {
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


let initListOfQuotes = (quoteModel) => {
  if (cardContainer) {
      document.getElementById('card-container').replaceWith(cardContainer);
      return;
  }
  
  cardContainer = document.getElementById('card-container');
  quoteModel.forEach((quote) => {
      const card = createQuoteCard(quote);
      cardContainer.appendChild(card);
  });
};


function getAllQuotes() {
  fetch("http://localhost:27017/api/", {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },

  })
      .then((response) => response.json())
      .then((quoteModel) => {
          console.log('success', quoteModel)
          initListOfQuotes(quoteModel);
      })
      .catch((error) => {
          console.error('Error', error)
      })
}


getAllQuotes()

function newQuote() {
  let myForm = document.getElementById('myQuotes')
  
  myForm.addEventListener('submit', function (e) {
      e.preventDefault()
      let formData = new FormData(myForm);
  
      const quote = {}
      for (const pair of formData.entries()) {
          const [key, value] = pair
          quote[key] = value
      }

      fetch("http://localhost:27017/api/quotes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(quote)
      }).then((response) => {
          return response.json()
      }).then((result) => {
          console.log(result)
      }).catch((error) => {
          console.error('Error', error)
      })
  })
}


newQuote()