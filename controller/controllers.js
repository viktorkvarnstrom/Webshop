app.controller("sortController", function($scope) {
    $scope.products = products;
    $scope.products.sortColumn = "productname";
    $scope.products.rowLimits = 6;
});

