"use strict";


function foo(arg1,arg2)
{

	var var1 = arg1;
	var var2 = arg2;

if (arg2 === undefined) {
    arg2 = 0;
  }  
	return function bar()
	{
		console.log("Sum of parameters:  " , var1 + var2);
	}
}

var foo2 = foo(2,5);

foo2();


//var int = foo(2,5);
//var float = foo(4.00,6.00);
//var string = foo("alpple","mango");

//var boolean = foo("True")


//var message = "Hello world!";
//var boolean =foo( Boolean(message) , Boolean(!message));
//console.log(messageAsBoolean);