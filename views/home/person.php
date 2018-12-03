<?php
	
	/*$people = [
		['id'=>1, 'name'=>'alamin', 'age'=>12],
		['id'=>2, 'name'=>'al-amin', 'age'=>42],
		['id'=>3, 'name'=>'alAmin', 'age'=>22]
	];

	header("content-type: application/json");*/

	$obj = json_decode($_POST['mydata']);

	header("content-type: application/json");	
	echo json_encode($obj);
?>