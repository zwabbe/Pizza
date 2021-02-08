//Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.total = total;
}

Pizza.prototype.calculateOrder = function() {
  let baseCost = 10;
  if (this.size === "Small") {
    this.total += 3;
  } else if (this.size === "Medium") {
    this.total += 4;
  } else if (this.size === "Large") {
    this.total += 5;
  } else {
    this.total += 0;
  }
  for (i = 0; i <= this.toppings.length - 1; i++) {
    this.total += 1;
  }
  let result = (this.total + baseCost);
  return result;
}



//UI logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    total = 0;
    let size = $("input[name=pizzaSize]:checked").val();
    let toppings = $("input:checkbox[name=pizzaTopping]:checked").map(function() {
      return this.value;
    }).get();
    let customer = new Pizza(size, toppings)
    $("#pizzaDisplay").show();
    $("#showPizzaSize").text(size);
    $("#showToppings").text(toppings);
    $("#showTotal").text(customer.calculateOrder());
  });
});