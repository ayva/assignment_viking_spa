var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/index");

  $stateProvider.state('main-page', {
    url: '/index',
    templateUrl: 'js/templates/products.html',
    controller: "MainCtrl"
  }).state('product-show-page', {
    url: '/show/:id',
    templateUrl: 'js/templates/show.html',
    controller: "MainCtrl"
  }).state('cart-page', {
    url: '/cart',
    templateUrl: 'js/templates/cart.html',
    controller: "MainCtrl"
  })

  .state('checkout',{
    url: '/checkout',
    templateUrl: 'js/templates/checkout.html',
    controller: "OrderCtrl"
  })

  .state('checkout.shipping',{
    url: '/shipping',
    templateUrl: 'js/templates/shipping.html',
    link: 'generateShipping'
    
  })

  .state('checkout.billing',{
    url: '/billing',
    templateUrl: 'js/templates/billing.html',
    link: 'generateBilling'
  })

  .state('checkout.payment',{
    url: '/payment',
    templateUrl: 'js/templates/payment.html'

  })

  .state('checkout.confirm',{
    url: '/confirm',
    templateUrl: 'js/templates/confirm.html'
  })

  .state('checkout.placed',{
    url: '/placed',
    templateUrl: 'js/templates/placed.html'
  });
});

app.run(function($rootScope){
 $rootScope.$on("$stateChangeError", console.log.bind(console));
});
