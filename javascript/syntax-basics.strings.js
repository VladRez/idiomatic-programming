"upcase".toUpperCase();                 //UPCASE
var upWord = "upcase"
    upWord.toUpperCase();               //UPCASE
"downcase".toLowerCase();               //UPCASE
var downWord = "downcase"
    downWord.toUpperCase();             //UPCASE

var message = "The brown fox jumped over the lazy dog.";
    message.indexOf("fox");             // 10
    message.indexOf("not");             // -1

    message.slice(10);                  //fox jumped over the lazy dog.
    message.slice(10, 13);              //fox
    message.length;                     //39
    "message".length;                   //7
    message.charAt(1);                  //h
    message.charAt(message.length - 1); //.
    //Long chain methods
    message.slice(10).toUpperCase().slice(4); //JUMPED OVER THE LAZY DOG
