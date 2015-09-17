app.factory('cartService', function(){
  var obj={};


  _cart = {};

  obj.total = function(){
    return Object.keys(_cart).reduce(function(total, current){
      return total+_cart[current].quantity*_cart[current].price;
    }, 0);
  };

  obj.placeOrder = function(){
    _cart={};
  };


  obj.listAll = function(){
    return _cart;
  };

  // If we have 1 of product 3
  // Then we add 8 more of product 3
  // is it going to be 9 of product 3 or 8 of product 3
  // Update vs add?

  // If quantity becomes negative remove from cart

  obj.addItem = function(product, qty){
    // Get or add product to our cart
    var newProduct = _cart[product.id] || JSON.parse(JSON.stringify(product)); // make an exact copy but not same object
    _cart[product.id] = newProduct;

    // Update the quantity of the product in the cart
    _cart[newProduct.id].quantity = qty;

    // If there are 0 or negative amount of newProducts, remove the newProduct.
    if (_cart[newProduct.id].quantity < 1) {
      obj.removeItem(newProduct);
    }
  }

  obj.removeItem = function(product){
    delete _cart[product.id];
  }




  return obj;
});
