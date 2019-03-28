app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "view/list.html",
        controller: "sortController" 
    })
    .when("/list", { 
        templateUrl: "view/list.html",
        controller: "listController" 
    })
    
    .when("/box", { 
        templateUrl: "view/box.html",
        controller: "boxController" 
    })
})