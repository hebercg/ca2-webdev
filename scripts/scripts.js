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

function letsGo(){
  var grindArray = new Array("cafetiere","aeropress","percolator");
  var beanTypeArray = new Array ("Colombian","Cuban","Brazilian");
  var grindSelection = Math.floor((Math.random()*3)+1);
  document.getElementById("grind-beans").innerHTML = grindArray[grindSelection];

  var beanSelection = Math.floor((Math.random()*3)+1);
  document.getElementById("bean-origin").innerHTML = beanTypeArray[beanSelection];

}

function hideTable(){
  document.getElementById("product-table").style.display="none";
}

function showTable(){
  document.getElementById("product-table").style.display="block";
}

function takeFlight(){
  var productTable = document.getElementById("product-table");
  var tableRows = productTable.querySelectorAll("tr");
  var rows = Array.from(tableRows).slice(1);
  console.log(rows);
  
  
  var randomProductSelect = Math.floor((Math.random()*(rows.length))+1);
  console.log(randomProductSelect);

  var randomProduct = rows[randomProductSelect-1];
  var currentCountry = (randomProduct.cells[2].innerHTML);
  alert(currentCountry);
    
}