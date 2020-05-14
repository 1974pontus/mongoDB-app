
// Create new user
function newUser() {
    let myForm = document.getElementById('register-form')
  
    myForm.addEventListener('submit', function (e) {
      e.preventDefault()
      let formData = new FormData(myForm);
  
      const name = {}
      for (const pair of formData.entries()) {
        const [key, value] = pair
        quote[key] = value
      }
  
      fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(name)
      }).then((response) => {
        return response.json()
      }).then((result) => {
        console.log(result)
      }).catch((error) => {
        console.error('Error', error)
      })
    })
  }
  
  newUser()


