const express = require('express');
const route = express.Router();


route.get("/", function(req, res, next) {
    res.status(200).json(
        [
            { id: 1, productname: "Marshall högtalare", price: 2990, rating: 4.3, quantity: 1, src: "img/marshall.jpg" },
            { id: 2, productname: "Bose högtalare", price: 990, rating: 3.3, quantity: 1, src: "img/bose.jpg" },
            { id: 3, productname: "JBL Charge 4", price: 1690, rating: 4.7, quantity: 1, src: "img/jblcharge4.jpg" },
            { id: 4, productname: "Portabel partyhögtalare", price: 1790, quantity: 1, rating: 3.5, src: "img/anderssonparty.jpg" },
            { id: 5, productname: "Audio pro A10", price: 1990, rating: 1.5, quantity: 1, src: "img/audioproa10.jpg" },
            { id: 6, productname: "Google home mini", price: 599, rating: 4.3, quantity: 1, src: "img/googlehome.jpg" },
            { id: 7, productname: "Audio pro Addon T3 - black", price: 1290, rating: 3.0, quantity: 1, src: "img/audio-pro-addon-t3.jpg"  },
            { id: 8, productname: "Marshall Acton BT", price: 1290, rating: 4.8, quantity: 1, src: "img/marshallacton.jpg" },
            { id: 9, productname: "JBL Boombox", price: 4990, rating: 5.0, quantity: 1, src: "img/jblboombox.jpg" },
            { id: 10, productname: "LG PK3", price: 799, rating: 2.3, quantity: 1, src: "img/lgpk3.jpg" },
            { id: 11, productname: "Radoi panasonic", price: 1990, rating: 3.0, quantity: 1, src: "img/radiopan.jpg" },
            { id: 12, productname: "Marshall Woburn II BT", price: 4690, rating: 4.9, quantity: 1, src: "img/marshall-woburn.jpg" }
        ]
        
    );
    
})

module.exports = route;