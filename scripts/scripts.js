/* JS function to trigger to toggle an event, in this case a button if we wanted to*/
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function addname() {
  var username = prompt("Please enter your name");
  document.getElementById("username").innerHTML = username;
}

function formValidate(){
  alert("This function works");
}