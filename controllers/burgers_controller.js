const express = require("express");

const burger = require('../models/burger.js');

let router = express.Router();

router.get('/', function( req, res ) {
	burger.all(function(data){
		res.render('index', {burger: data} );
	});		 
});

router.post('/', function( req, res ) {
	let newBurger = {burger_name: req.body.burger_name,
					 devoured: false,
					 date: new Date()}
	burger.create(newBurger, function() {
		res.redirect('/');
	});
});

router.put('/:id', function( req, res ) {
	console.log('controller hit');
	//I couldn't find a good way to parse strings to bools, and it wasn't updating correctly when I passed true as a string, so I had to do this hackery to get around that, instead of hardcoding in simply "devoured: true"
	let devoured = (req.body.devoured == "true")
	let updatedBurger = {devoured: devoured}

	burger.update(updatedBurger, {id: req.params.id}, function(){
		res.redirect('/');
	});
});

module.exports = router;