/*var keyword identifier + ;
(camel casing, downcaseUpcase convention)*/
var fruitCategory;
/* 
By itself the Js console will return an "unidentified"
since the actual statement doesn't explicitly do anything 
however behind the scenes we're telling the Js engine that
we're are going to want to assign a value in a variable called 'color'

There are some restrictions on variable names, for example
names cannot start with numbers .

The equal sign like most languages is the assignment operator.
*/
fruitCategory = "Apple";
/*
Strings can be concatenated with the " + "
 */
var fruitSubCategory = "Fuji";
var fruitFullName = fruitSubCategory + " " + fruitCategory + "'s";
/*
Numbers can also be concatenated with strings
*/
var fruitWeightLbs= 0.33;
var fruitQuantity = 10;

var message = fruitQuantity + " " + fruitFullName + " weight in lbs: " + fruitWeightLbs * fruitQuantity;
//10 Fuji Apple's weight in lbs: 3.3000000000000003

