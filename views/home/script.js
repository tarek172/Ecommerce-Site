"use strict"

$(document).ready(function(){

  var a = function(){
            return [
                    "101.125.1123",
                    "111.105.1334",
                    "121.155.1133",
                    "103.115.0123",
                    "131.105.1523",
                    "101.125.1163",
                    "103.125.1123"
                  ];
            } 

  //fixed array
  $('#autocomplete').autocomplete({
      source: ['101.125.1123','131.125.1123','103.125.1123','111.125.1123']
  });

  //by calling a function
  $('#autocomplete').autocomplete({
    source: a()
  });

  //by ajax call
/*  $('#autocomplete').autocomplete({
    source: 'list.php'
  });*/  

  var obj={
    proparty1: 'value1',
    proparty2: 2
  };

 /* var json= {
    'proparty1': 'value1',
    'proparty2': 2

  };*/

/*  var json=[
    {
      'proparty1': 'value1',
      'proparty2': 2
    },
    {
      'proparty1': 'value1',
      'proparty2': 2
    },
    {
      'proparty1': 'value1',
      'proparty2': 2
    }
  ];*/

  $('#show').click(function(){

     var json = {
          id: 12,
          name: 'alamin'
     };

     var dataString = JSON.stringify(json);

      $.ajax({
        url: 'person.php',
        method: 'POST',
        data: {mydata: dataString},
        success: function(response){
          //alert("Response: "+response);
          //var value = JSON.parse(response);
          //alert(response.name);
        },
        error: function(error){
          alert('Error: '+error);
        }
      });
  });  

});
