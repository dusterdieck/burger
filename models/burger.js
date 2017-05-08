const orm = require('../config/orm.js');

let burger = {
  all: function( fn ) {
    orm.selectAll("burgers", function( data ) {
      fn( data );
    });
  },
  // values should be an object with keys = column names
  create: function( values, fn ) {
    orm.insertOne("burgers", values,  function( data ) {
      fn( data )
    });
  },
  // values should be an object with keys = column names
  update: function( replacementValue, condition, fn ) {
    orm.updateOne("burgers", replacementValue, condition, function( data ) {
      console.log('burgers hit');
      fn( data );
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;