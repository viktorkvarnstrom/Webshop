    var app = angular.module("sortApp", []);

    app.controller("sortController", function($scope) {

        var products = [
            { productname: "Marshall högtalare", price: 2990, src: "img/marshall.jpg" },
            { productname: "Bose högtalare", price: 990, src: "img/bose.jpg" },
            { productname: "JBL Charge 4", price: 1690, src: "img/jblcharge4.jpg" },
            { productname: "Portabel partyhögtalare", price: 1790, src: "img/anderssonparty.jpg" },
            { productname: "Audio pro A10", price: 1990, src: "img/audioproa10.jpg" },
            { productname: "Google home mini", price: 599, src: "img/googlehome.jpg" },
            { productname: "Audio pro Addon T3 - black", price: 1290, src: "img/audio-pro-addon-t3.jpg"  },
            { productname: "Marshall Acton BT", price: 1290, src: "img/marshallacton.jpg" },
            { productname: "JBL Boombox", price: 4990, src: "img/jblboombox.jpg" },
            { productname: "LG PK3", price: 799, src: "img/lgpk3.jpg" },
            { productname: "Radoi panasonic", price: 1990, src: "img/radiopan.jpg" },
            { productname: "Marshall Woburn II BT", price: 4690, src: "img/marshall-woburn.jpg" }
        ];

        $scope.products = products;
        $scope.sortColumn = "productname";

    });