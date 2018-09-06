//Javascript is a loosely types language meaning that different data types are inferred
//Use typeof(var) to check type
var addTuple = function(variableA, variableB, variableC){
   var sumTotal = variableA + variableB + variableC;
    return sumTotal
};

//Not particularly safe
addTuple(1, 2, 3);
// returns 6

addTuple("A", "B", "C");
// returns "ABC"

addTuple("A", 2, 3);
// returns A23

addTuple(1, 2, "C");
// returns 3C


