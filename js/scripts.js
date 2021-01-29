//Business logic
function Pizza(size, toppings, total) {
  this.size = size;
  this.toppings = toppings;
  this.total = total;
}


Pizza.prototype.calculateOrder = function() {
  let baseCost = 10;
  // Checks for sizes and amount of toppings. Adds price value depending on size and amount of toppings
  if (this.size === "small") {
    this.total += 3;
  } else if (this.size === "medium") {
    this.total += 4;
  } else(this.size === "large")
  this.total += 5;
  //the loop through toppings and adds 1 dollar for each topping that was checked prior to submit
  for (i = 0; i <= this.toppings.length; i++) {
    this.total += 1;
  }
  return result = (this.total + baseCost);
}





//UI logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    total = 0;
    var size = $("input[name=pizzaSize]:checked").val();
    var toppings = $("input:checkbox[name=pizzaTopping]:checked").map(function() {
      return this.value;
    }).get();
    let customer = new Pizza(size, toppings, total)
    customer.calculateOrder();
    //Would like to move this out into it's own function. But we live here for now. 
    $("#pizzaDisplay").show();
    $("#showPizzaSize").text(size);
    $("#showToppings").text(toppings);
    $("#showTotal").text(result);
  });
});