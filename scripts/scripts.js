
/*
$(document).ready(function () {
  // Get the current page
  var currentUrl = window.location.href;

  // Remove the current/active class from the nav
  $("#navigation-list .nav-link").removeClass("active");

  // Loop through each nav link and add the active class if its href matches the current URL
  $("#navigation-list .nav-link").each(function () {
    if ($(this).attr("href") === currentUrl) {
      $(this).addClass("active");
    }
  });
});
*/
/* JS function to trigger to toggle an event, in this case a button if we wanted to*/
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function loadElements() {
  var username;
  if (localStorage.getItem("username") == null) {
    var nameSelection = confirm(
      "We would love to personalise your experience here just like we personalise your coffee! Would you like to give us your name?"
    );
    if (nameSelection == true) {
      username = prompt("Please enter your name");
    } else {
      username = "Coffee Lover";
    }

    localStorage.setItem("username", username);
  } else {
    username = localStorage.getItem("username");
  }
  if (document.getElementById("username") != null) {
    document.getElementById("username").innerHTML = username;
  } else {
    //pass
  }

  var headerString = "<h1>Life begins with coffee</h1>";
  document.getElementById("page-header").innerHTML = headerString;

  $(document).ready(function () {
    $("#main-navigation").load("navigation.html");
  });

  if(document.getElementById("product-table") != null){
    hideTable();
  }
  else{
    //pass
  }
}

function formValidate() {
  var lettersAndDash = /^[A-Za-z-]+$/;
  var numbers = /^[0-9]+$/;
  var lettersAndNumbers = /^[0-9A-Za-z]+$/;

  if (document.getElementById("order-form").checkValidity()) {
    if (
      document.getElementById("first-name").value.match(lettersAndDash) &&
      document.getElementById("last-name").value.match(lettersAndDash)
    ) {
      if(document.getElementById("eircode").value.match(/^[0-9A-Za-z]{7}/)){
        //next
      }
      else{
        alert("Incorrect eircode format. Please enter full 7-digit eircode without spaces")
      }
    } else {
      alert(
        "Please provide your first and last name. If you do happen to have numbers in your name, contact us."
      );
    }
  } else {
    //HTML form errors first
  }
}

function letsGo() {
  var grindArray = new Array("cafetiere", "aeropress", "percolator");
  var beanTypeArray = new Array("Colombian", "Cuban", "Brazilian");
  var grindSelection = Math.floor(Math.random() * 3 + 1);
  document.getElementById("grind-beans").innerHTML = grindArray[grindSelection];

  var beanSelection = Math.floor(Math.random() * 3 + 1);
  document.getElementById("bean-origin").innerHTML =
    beanTypeArray[beanSelection];
}

function hideTable() {
  document.getElementById("product-table").style.display = "none";
}

function showTable() {
  var buttonText = document.getElementById("show-products-button").innerHTML;

  var showMessage = "Just show me the products"
  var hideMessage = "Hide";
  

  if(buttonText===hideMessage){
    hideTable();
    document.getElementById("show-products-button").innerHTML=showMessage;
    buttonText = showMessage;
  }
  else{
    document.getElementById("product-table").style.display = "block";
    document.getElementById("show-products-button").innerHTML=hideMessage;
    buttonText = hideMessage;
  }

}

function takeFlight() {
  var productTable = document.getElementById("product-table");
  var tableRows = productTable.querySelectorAll("tr");
  var rows = Array.from(tableRows).slice(1);
  console.log(rows);

  var randomProductSelect = Math.floor(Math.random() * rows.length + 1);
  console.log(randomProductSelect);

  var randomProduct = rows[randomProductSelect - 1];
  var currentCountry = randomProduct.cells[2].innerHTML;
  alert(currentCountry);
}
