//Heber almost had a hearth attach to make this work
var productIDArray = [];
var productNameArray = [];
var beanTypeArray = [];
var originArray = [];
var priceArray = [];
var imageLinkArray = [];
var propertiesArray = [];
var descriptionArray = [];
var hintsArray=[];

var cardsContent = `<div class="card">
    <img src="" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"></h5>
    <h6 class="card-subtitle mb-2 text-muted"></h6>
    <p class="card-text"></p>
</div>`;

$(document).ready(function () {
  $.getJSON("products.json", function (data) {
    $.each(data, function (index, value) {
      productIDArray.push(value.productID);
      productNameArray.push(value.productName);
      beanTypeArray.push(value.beanType);
      originArray.push(value.origin);
      priceArray.push(value.price);
      imageLinkArray.push(value.imageLink);
      propertiesArray.push(value.properties);
      descriptionArray.push(value.description);
      hintsArray.push(value.hints);
    });
  });
  $("#main-navigation").load("navigation.html");
  setTimeout(() => {
    // Get the current page
    var currentUrl = window.location.pathname;
    // Remove the current/active class from the nav
    $("#navigation-list .nav-link").removeClass("active");
    // Loop through each nav link and add the active class if its href matches the current URL
    $("#navigation-list .nav-link").each(function () {
      if ($(this).attr("href") === currentUrl) {
        $(this).addClass("active");
      }
    });
  }, "50");
  loadElements();
});

/*footer*/
$(function () {
  $("#block-footer").load("footer.html");
});
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

  if (document.getElementById("product-div") != null) {
    hideProducts();
  } else {
    //pass
  }
}
$(function () {
  $("#page-header").load("header.html");
});

function formValidate() {
  var lettersAndDash = /^[A-Za-z-]+$/;
  var numbers = /^[0-9]+$/;
  var lettersAndNumbers = /^[0-9A-Za-z]+$/;

  if (document.getElementById("order-form").checkValidity()) {
    if (
      document.getElementById("first-name").value.match(lettersAndDash) &&
      document.getElementById("last-name").value.match(lettersAndDash)
    ) {
      if (document.getElementById("eircode").value.match(/^[0-9A-Za-z]{7}/)) {
        //next
      } else {
        alert(
          "Incorrect eircode format. Please enter full 7-digit eircode without spaces"
        );
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

function hideProducts() {
  document.getElementById("product-div").style.display = "none";
}

function showProducts() {
  var buttonText = document.getElementById("show-products-button").innerHTML;

  var showMessage = "Just show me the products";
  var hideMessage = "Hide";

  if (buttonText === hideMessage) {
    hideProducts();
    document.getElementById("show-products-button").innerHTML = showMessage;
    buttonText = showMessage;
  } else {
    document.getElementById("product-div").style.display = "block";
    document.getElementById("show-products-button").innerHTML = hideMessage;
    buttonText = hideMessage;
  }

  addCardContent();
}

function takeFlight() {
  if(document.getElementById("card-group").innerHTML=="" && document.getElementById("journey-div").innerHTML==""){
    document.getElementById("product-div").style.display = "block";
    document.getElementById("journey-div").innerHTML="Hello";
  }
  else{
    document.getElementById("card-group").innerHTML="";
    document.getElementById("journey-div").innerHTML="";
    document.getElementById("product-div").style.display = "block";
    var imgTag = document.createElement("img");
    document.getElementById("journey-div").appendChild(imgTag);
    for(i=0;i<3;i++){
      var textTag = document.createElement("p");
      document.getElementById("journey-div").appendChild(textTag);
    }
    var inputTag = document.createElement("input");
    document.getElementById("journey-div").appendChild(inputTag);
    var span = document.createElement("span");
    document.getElementById("journey-div").appendChild(span);
    span.innerHTML='<button id=quizButton onClick="quiz()>Submit</button>"'
    
    var image = document.getElementsByTagName("img")[0];
    var randomSelection = Math.floor(Math.random() * (imageLinkArray.length)+ 1);
    console.log(randomSelection)

    image.src=imageLinkArray[randomSelection-1];
    for(i=0;i<hintsArray[randomSelection-1].length;i++){
      document.getElementsByTagName("p")[i].innerHTML=hintsArray[randomSelection-1][i];
    }

    if(document.getElementsByTagName("input")){
      quiz();
    }

    function quiz(){
      if(document.getElementsByTagName("input")[0].value==originArray[randomSelection]){
        document.write("You guessed it!")
      }
      else{
        document.write("Bad luck. It was "+originArray[randomSelection])
      }
    }
  }
}

function addCardContent(){
  if(document.getElementById("card-group").innerHTML==""&&document.getElementById("journey-div").innerHTML==""){
    document.getElementById("product-div").style.display = "block";
    for(i=0;i<imageLinkArray.length;i++){
      document.getElementById("card-group").innerHTML+=cardsContent;
      var image = document.getElementsByTagName("img")[i];
      image.src=imageLinkArray[i];
      image.alt=imageLinkArray[i];
      document.getElementsByClassName("card-title")[i].innerHTML=productNameArray[i];
      document.getElementsByClassName("card-subtitle mb-2 text-muted")[i].innerHTML=originArray[i];
      document.getElementsByClassName("card-text")[i].innerHTML=descriptionArray[i];
    }
  }
  else{
    document.getElementById("card-group").innerHTML="";
    document.getElementById("journey-div").innerHTML="";
    document.getElementById("product-div").style.display = "block";
  } 
}