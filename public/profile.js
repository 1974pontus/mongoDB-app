
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function quoteSaver() {
    event.preventDefault()
    var li = document.createElement("li");
    var inputValue = document.getElementById("myQuotes").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("quoteList").appendChild(li);
    }
    document.getElementById("myQuotes").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }



  let cardContainer

// skapar citatcards
let createQuoteCard = (quotes) => {

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let brand = document.createElement('h5');
    brand.innerText = 'Brand: ' + quotes.brand;
    brand.className = 'card-brand';

    cardBody.appendChild(brand);
  
    card.appendChild(cardBody);
    return card
}

let initListOfquotess = (quotes) => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }
    
    cardContainer = document.getElementById('card-container');
    quotes.forEach((quotes) => {
        const card = createQuoteCard(quotes);
        cardContainer.appendChild(card);
    });
};



function getAllquotes() {
    fetch("http://localhost:3000/api/quotess", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },

    })
        .then((response) => response.json())
        .then((quotes) => {
            console.log('success', quotes)
            initListOfquotess(quotes);
        })
        .catch((error) => {
            console.error('Error', error)
        })
}

getAllquotes()

function newquotes() {
    let myForm = document.getElementById('myForm')
    
    myForm.addEventListener('submit', function (e) {
        e.preventDefault()
        let formData = new FormData(myForm);
    
        const quotes = {}
        for (const pair of formData.entries()) {
            const [key, value] = pair
            quotes[key] = value
        }

        fetch("http://localhost:3000/api/quotess", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(quotes)
        }).then((response) => {
            return response.json()
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.error('Error', error)
        })
    })
}

newquotes()