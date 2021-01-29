//Business logic








function Pizza(size, topping) {
  this.size = size;
  this.toppings = topping;
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
    var topping = $("input:checkbox[name=pizzaTopping]:checked").map(function() {
      return this.value;
    }).get();

    let customer = new Pizza(size, topping);
    console.log(customer)
  });
});