//Business logic








function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.calculateOrder = function() {
  if (size === '2') {
    this.size = 2;
    console.log("Hi");
  }
}


//UI logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();


    var size = $("input[name=pizzaSize]:checked").val();
    var toppings = $("input[name=pizzaTopping]:checked").val();
    let customer = new Pizza(size, toppings);
    console.log(customer)
  });








});