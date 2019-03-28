app.controller("sortController", function($scope) {
    $scope.products = products;
    $scope.products.sortColumn = "productname";
    $scope.products.rowLimits = 6;
});

app.controller("listController", function($scope) {
    $scope.products = products;
    $scope.products.sortColumn = "productname";
    $scope.products.rowLimits = 6;
});

app.controller("boxController", function($scope) {
    $scope.products = products;
    $scope.products.sortColumn = "productname";
    $scope.products.rowLimits = 6;
});

