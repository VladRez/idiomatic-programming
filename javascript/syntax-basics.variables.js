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
var fruitFullName = fruitSubCategory + fruitCategory;
/*
Numbers can also be concatenated with strings
*/
var fruitWeightlbs= 0.33;

console.log(fruitFullName + " weight in lbs: " + fruitWeightlbs);
