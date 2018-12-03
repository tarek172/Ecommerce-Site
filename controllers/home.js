var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('*', function(request, response, next){
	
	if(request.session.un != ""){
		next();
	}else{
		response.redirect('/login');
	}
});

router.get('/', function(request, response){
	
	userModel.getAll(function(result){
		response.render('home/index');
	});
});

router.get('/about', function(request, response){
	
		response.render('home/about');
});

											
router.get('/userlist', function(request, response){											//user list
	userModel.getAll(function(result){
		response.render('home/userList', {userList: result});
	});

});


router.get('/adduser', function(request, response){												// add user

	response.render('home/create');
});

router.post('/adduser', function(request, response){

	var user={
		name: request.body.name,
		username: request.body.username,
		password: request.body.password,
		type: request.body.type,
		address: request.body.address
};
	
	if (user.name=="" || user.username=="" || user.password=="" || user.type=="" || user.address=="") {

		response.send('Error in adding user');
			
	}

	else{
		userModel.insert(user, function(status){
		
		if(status == true){
			response.redirect('/home/userlist');
		}else{
			response.send('Error in adding user');
		}
		
	});
	}


});


router.get('/edit/:id', function(request, response){											// edit user
	
		var userId = request.params.id;

		userModel.get(userId, function(result){
			response.render('home/edit', {user: result});
		});

});

router.post('/edit/:id', function(request, response){
	
		var user = {
			id 		: request.body.id,
			name    : request.body.name,
			username: request.body.username,
			password: request.body.password,
			type	: request.body.type,
			address	: request.body.address

		};

		console.log(user);

		userModel.update(user, function(status){

			if(status){
				
				response.redirect(request.body.id);
			}else{
				response.send('Error');
			}
			
		});

});


router.get('/deleteuser/:id', function(request, response){										//delete user

	var userId = request.params.id;

		userModel.delete(userId, function(result){
			response.render('home/delete', {user: result});
		});
});

router.post('/deleteuser/:id', function(request, response){
	

		var userId = request.params.id;

		userModel.delete(userId, function(status){

			if(status){
				
				response.redirect(userId);
			}else{
				response.send('Error');
			}
			
		});

});


router.get('/productlist', function(request, response){											//product list
	userModel.pgetAll(function(result){
		response.render('home/pList', {pList: result});
	});

});


router.get('/addproduct', function(request, response){												// add product

	response.render('home/pcreate');
});

router.post('/addproduct', function(request, response){

	var product={
		pname: request.body.pname,
		price: request.body.price,
		quantity: request.body.quantity,
		category: request.body.category,
		specification: request.body.specification
};

	

	if (product.pname=="" || product.price=="" || product.quantity=="" || product.category=="" || product.specification=="") {

		response.send('Error in adding product');
			
	}

	else{
		userModel.pinsert(product, function(status){
		
		if(status == true){
			response.redirect('/home/productlist');
		}else{
			response.send('Error in adding product');
		}
		
	});
	}

});


router.get('/pedit/:pid', function(request, response){											// edit product
	
		var productId = request.params.pid;

		userModel.pget(productId, function(result){
			response.render('home/pedit', {product: result});
		});

});

router.post('/pedit/:pid', function(request, response){
	
		var product = {
			pid 		: request.body.pid,
			pname: request.body.pname,
			price: request.body.price,
			quantity: request.body.quantity,
			category: request.body.category,
			specification: request.body.specification

		};

		console.log(product);

		userModel.pupdate(product, function(status){

			if(status){
				response.redirect(request.body.pid);
			}else{
				response.send('Error');
			}
			
		});

});


router.get('/deleteproduct/:pid', function(request, response){										//delete product

	var productId = request.params.pid;

		userModel.pdelete(productId, function(result){
			response.render('home/pdelete', {product: result});
		});
});

router.post('/deleteproduct/:pid', function(request, response){
	

		var productId = request.params.pid;

		userModel.pdelete(productId, function(status){

			if(status){
				
				response.redirect(productId);
			}else{
				response.send('Error');
			}
			
		});

});


router.get('/profile', function(request, response){											//user list
	userModel.getAll(function(result){
		response.render('home/profile', {userList: result});
	});

});


module.exports = router;