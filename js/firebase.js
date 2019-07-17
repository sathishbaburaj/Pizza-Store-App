var firebaseConfig = {
  apiKey: "AIzaSyCzKDtUcDidGVDlWC0syGDeu1SQOi1nMmI",
  authDomain: "my-tuesday-fce48.firebaseapp.com",
  databaseURL: "https://my-tuesday-fce48.firebaseio.com",
  projectId: "my-tuesday-fce48",
  storageBucket: "",
  messagingSenderId: "961659065151",
  appId: "1:961659065151:web:615ac41b7afdb4ec"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var dataRef = firebase.database()

var name = "";
var email = "";

$('#sbtn').on("click", function(event){
  event.preventDefault();

  var name = $('#fname').val().trim();
  var email = $('#email').val().trim();

  var item = document.querySelectorAll('.cart-item-title')[0].textContent;
  var price = document.querySelectorAll('.cart-price')[1].textContent;
  var quantity = document.querySelectorAll('.cart-quantity-input')[0].value;
  console.log(item);
  dataRef.ref().push({
    name: name,
    email: email,
    item: item,
    price: price,
    quantity: quantity,
  });


});



dataRef.ref().on("value", function(snapshot){
  console.log(snapshot.val());
  console.log(snapshot.val().name);
  console.log(snapshot.val().email);
  console.log(snapshot.val().item);
  console.log(snapshot.val().price);
  console.log(snapshot.val().quantity);


}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

