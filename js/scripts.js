//Business logic
function Pizza(size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.baseCost = 10;
}

Pizza.prototype.calculateOrder = function() {
  // checks the size of pizza and adds the price to this.cost
  if (this.size === "small") {
    this.baseCost += 3;
  } else if (this.size === "medium") {
    this.baseCost += 4;
  } else if (this.size === "large") {
    this.baseCost += 5;
  }
  for (i = 0; i <= this.toppings.length; i++) {
    this.baseCost += 1;
  }
}

//UI logic

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var size = $("input[name=pizzaSize]:checked").val();
    var toppings = $("input:checkbox[name=pizzaTopping]:checked").map(function() {
      return this.value;
    }).get();
    let customer = new Pizza(size, toppings);

    customer.calculateOrder();
    console.log(customer)
  });
});