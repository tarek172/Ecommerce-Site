var db = require('./db');

module.exports={
	
	get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM user";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO user values(null, ?, ?, ?, ?, ?)";
		db.execute(sql, [user.name, user.username, user.password, user.type, user.address], function(success){
			callback(success);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "UPDATE user set name=?, username=?, password=?, type=?, address=? where id=?";
	
		db.execute(sql, [user.name, user.username, user.password, user.type, user.address, user.id], function(status){
			callback(status);
		});
	},

	delete: function(userId, callback){
		var sql = "DELETE from user where id=?";
	
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},

	pget: function(productId, callback){														//product
		var sql = "select * from product where pid=?";
		db.getResult(sql, [productId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	pgetAll: function(callback){															//product
		var sql = "SELECT * FROM product";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	pinsert: function(product, callback){														//product
		var sql = "INSERT INTO product values(null, ?, ?, ?, ?, ?)";
		db.execute(sql, [product.pname, product.price, product.quantity, product.category, product.specification], function(success){
			callback(success);
		});
	},
	
	pupdate: function(product, callback){														//product
		var sql = "UPDATE product set pname=?, price=?, quantity=?, category=?, specification=? where pid=?";
	
		db.execute(sql, [product.pname, product.price, product.quantity, product.category, product.specification, product.pid], function(status){
			callback(status);
		});
	},

	pdelete: function(productId, callback){													//product
		var sql = "DELETE from product where pid=?";
	
		db.execute(sql, [productId], function(status){
			callback(status);
		});
	},
}