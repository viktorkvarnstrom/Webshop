var app = angular
    .module("sortApp", ["ngRoute"])
    .controller("sortController", function ($rootScope, $http) {
        
        const starsTotal = 5;

        var getProductId = function(products, id) {
            return _.find(products, function(product) {
                return product.id === id
            });
        };

        
        $http.get("http://localhost:5000/api/products").then(function (res) {
            $rootScope.products = res.data;
            $rootScope.products.sortColumn = "productname";
            $rootScope.products.rowLimits = 12;
            $rootScope.cart = [];
            $rootScope.emptycart = "";
            $rootScope.rating = function (input) {
                return `${Math.round(((input / starsTotal) * 100) / 10) * 10}%`;

            }

        })

        

        $rootScope.addItem = function(product) {
            var found = getProductId($rootScope.cart, product.id);
    
            if(found) {
                found.quantity += product.quantity;
            }
            else {
                $rootScope.cart.push(angular.copy(product));
            }
        }
    
        $rootScope.removeItem = function(product) {
            var index = $rootScope.cart.indexOf(product);
            $rootScope.cart.splice(index, 1);
        }
    
        $rootScope.getProductCost = function(product) {
            return product.quantity * product.price;
        }
    
        $rootScope.getProductQuantity = function(product) {
            return product.quantity;
        }
    
        $rootScope.getTotal = function() {
            var total = _.reduce($rootScope.cart, function(sum, product) {
                return sum + $rootScope.getProductCost(product);
            }, 0);
    
            if($rootScope.cart.length === 0) {
                $rootScope.emptycart = "Your cart is empty."
            }
            else {
                $rootScope.emptycart = ""
            }   
            return total;
        }
    
        $rootScope.getQuantity = function() {
            var quantity = _.reduce($rootScope.cart, function(sum, product) {
                return sum + $rootScope.getProductQuantity(product);
            }, 0);
    
            if(quantity === 0) {
                $rootScope.badgeColor = "badge-secondary"
            } else {
                $rootScope.badgeColor = "badge-danger"
            }
    
    
            return quantity;
        }

    })