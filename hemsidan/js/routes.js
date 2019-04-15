app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "view/box.html",
        controller: "sortController" 
    })
    .when("/list", { 
        templateUrl: "view/list.html",
        controller: "sortController" 
    })
    
    .when("/box", { 
        templateUrl: "view/box.html",
        controller: "sortController" 
    })
})