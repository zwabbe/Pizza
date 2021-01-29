//Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;

}









//UI logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let size = $("pizzaSizeForm")
    let toppings = $("pizzaToppingForm")
    let customer = new Pizza(size, toppings);
  });








});