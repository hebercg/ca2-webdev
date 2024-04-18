/* JS function to trigger to toggle an event, in this case a button if we wanted to*/
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function loadElements() {
  var username;
  if(localStorage.getItem("username")==null){
    var nameSelection = confirm("We would love to personalise your experience here just like we personalise your coffee! Would you like to give us your name?")
    if(nameSelection == true){
      username=prompt("Please enter your name");
    }
    else{
      username="Coffee Lover"
    }
    
    localStorage.setItem("username",username);
  }
  else{
    username = localStorage.getItem("username");
  }
    if(document.getElementById("username") != null){
      document.getElementById("username").innerHTML = username;
    }
    else{
      //pass
    }
    

    var headerString = "<h1>Test Mode Because we like that</h1>";
    document.getElementById("page-header").innerHTML=headerString;

    $(document).ready(function() {
      $('#main-navigation').load('navigation.html');
    });
}
    


function formValidate(){
  var letters = /^[A-Za-z]+$/;
  var numbers = /^[0-9]+$/;

  if(document.getElementById("order-form").checkValidity()){
    if(document.getElementById("first-name").value.match(letters) && document.getElementById("last-name".value.match(letters))){
      //next
    }
    else{
      alert("Unless your father's name is Elon, you need to give us your real name.");
    }
  }
  else{
    //HTML form errors first
  }
  
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