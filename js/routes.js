app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "view/box.view.html",
        controller: "sortController" 
    })
    .when("/list.view", { 
        templateUrl: "view/list.view.html",
        controller: "sortController" 
    })
    
    .when("/box.view", { 
        templateUrl: "view/box.view.html",
        controller: "sortController" 
    })
})