var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function validate(){
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
  valide = false;

  let usernameArray = ["user"];
  let passwordArray = ["pass"];


      if (username==usernameArray[0] && password==passwordArray[0]){
          window.location = "index.html";


      }



      }
