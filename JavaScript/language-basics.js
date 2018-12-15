/*Notes here are based on ECMAScript conventions*/

//This is a C-Style single line comment
/**
 * This is a C-Style
 *  multi-line comment
 */

//Everything is case sensitive 'name' is different from 'Name'

/*
Identifier: variable, function, property, or function argument name
fist character must be a letter, underscore _ , or a dollar sign $
identifiers are in Camel Case by convention:

lastName
creditLine
*/

//Statements: Terminated by semicolon, will work without but not recommended.
var totalNum = valA + valB; 

//C-Style control statement 
if (isValid) accountAccess = true;

//Code block
if (isValid){
    accountAccess = true;
    sendMessage(message);
}

//Reserved Words
/*
abstract	double	    in	        super
boolean	    else	    instanceof	switch
break	    enum	    int	        synchronized
byte	    export	    interface	this
case	    extends	    long	    throw
catch	    final	    native	    throws
char	    finally	    new	        transient
class	    float	    package	    try
const	    for	        private	    typeof
continue	function	protected	var
debugger	goto	    public	    void
default	    if	        return	    volatile
delete	    implements	short	    while
do	        import	    static	    with
etc...
*/

//Variables - loosly typed, implicitly holds any data type.

var textMessage = "The brown fox jumped over the lazy dog.";
    textMessage = 45.67; //allowable but not recommended

/* 
var makes the variable local. if var is within a function 
then that variable is removed from memory once the function 
exists.
*/
function textmessage() {
    var textmessage = "Lorem Ipsum...";
} 

//Omitting var defines variable as global, notice syntax highlighting.

function textmessage() {
     textmessage = "Lorem Ipsum...";
}

//Defining multiple variables in a single statement. 
    var num = 3,
        txt = "word",
        isOpen = true;
        
//Main primitive types
/*
 * Number - Stores integers and floats (spacial case: octal and hexadecimal)
 *  * parseInt("0xFF", 16)/ parseFloat("12.64")/ Number() - to cast
 *  * NaN - Not a number error
 * String - Represents 16-bit Unicode characters ""/''
 *  * string variables can be added together for concatination
 *  * variableName.toString(); to conver to string
 * Boolean - true / false
 * Null - An Empty Object
 * Undefined - Variable declared by var but not initialized
 */
//All other complex data types are called Object. 

var obj = new Object();
/**Default Object instance properties
 * constructor - function used to create the object
 * valueOf() - returns primitive equivalent of the object
 */

//Operators - Used to manipulate data values
// Unary Operators - Increment/Decrement both prefix/postfix ++val / val--
var valA = 3;
var valB = 15;
var valC = valA-- + valB; // 18
//Adds valA and valB is added first then valA is decremented by one
var valD = valA + valB; // 2 + 15 = 17

function LetterChange(str){
    var rxAlpha = /^[a-zA-Z]$/;
    var rxVowel = /^[aeiou]$/;
    var wordArr = str.split(' ');

    //Using split/join, map and anonymous functions we can short-hand for each loop
    return wordArr.map(function(word){
        return word.split('').map(function(chr){
            //Using Regex + ternary operator to short-hand if statements
            //increase chr ascii code by 1 then mod {97("a" ascii) + 26 letters}
            chr = rxAlpha.test(chr) ? String.fromCharCode(((chr.charCodeAt(0) + 1) % (97 + 26))) : chr;
            chr = rxVowel.test(chr) ? chr.toUpperCase() : chr;

            return chr;
        }).join('');
    }).join(' ');
}
