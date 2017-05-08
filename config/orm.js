const pool = require('./connection.js');

module.exports = {

	//method for selecting all values in a given table, and pass data back to the user in a callback
	selectAll: function( table, fn ) {
		pool.getConnection(function(err, connection){
			connection.query('SELECT * FROM ??', table, function(err, data){
				if (err) throw err;
				connection.release();
				fn( data );
			});
		});
	},

	//method for inserting a value into a table.  value should be an object with key equal to the columns of table
	//passes query result back to user in callback.
	insertOne: function( table, values, fn ) {
		pool.getConnection(function(err, connection){
			connection.query('INSERT INTO ?? SET ?', [table, values], function(err, data){
				if (err) throw err;
				connection.release();
				fn( data );
			});
		});
	},

	//method for updating value of a table. both values should be objects with key = column of table
	//passes query result back to user in callback
	updateOne: function( table, replacementValue, condition, fn ) {
		console.log(table, replacementValue, condition);
		pool.getConnection(function(err, connection){
			connection.query('UPDATE ?? SET ? WHERE ?', [ table, replacementValue, condition ], function(err, data){
				if (err) throw err;
				console.log('orm hit', data);
				connection.release();
				fn( data );
			});
		});
	}
}