/* JS function to trigger to toggle an event, in this case a buttonr*/
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function addname(){
  var name = prompt("Please enter your name");
  document.getElementById("name").innerHTML = name;
}