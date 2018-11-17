# RUBY

A pure object oriented language know for it's high level semantic syntax and
garbage collected memory management. Almost everything is an object including what would be consider primitive
variables such as integers and booleans. Ruby is completely interpreted and isn't compiled into an 
intermediary language like C#/VB or java. Completely cross-platform and most recognized for its use in
Ruby on Rails framework. 

# Displaying Data
* `puts("text")` displays user data to the shell.
    * This method adds a newline `\n` at the end.
    * Parenthesis are optional.
    * Accepts multiple arguments, `puts("A","B")`, delimited by a newline character.
* `print("text")` prints without a newline. 
    * Accepts multiple arguments and not delimited. 
* `gets` retrieves data from user keyboard. 
    * Receives all of it's data as a string, this includes numbers.
    * Variable assigned with this method will be concatenated with a newline `\n` character.
        * Use `Integer(variable)` or `Float(variable)` to convert from string to number.
        * Use `.chomp()` method to remove the newline character.

# Variables
* Common variable styles:
    * Start with lowercase `total`.
    * Use of underscore `_total`.
    * Use of `camelCase` or `compound_underscore`.
    * Best practice to use meaningful names `currentTempInCel = 32` instead of `c = 32`. 
* Scope
    * Global variables start with `$`
    * Constant variables are written in all caps, `RATE = 0.345`
        * Easily recognized, or called out.
        * Constants CAN be changed throughout the application life.
## Ruby Specific feature
* Chain assignment:
    * `valA = valB = valC = valD = 1`
        * All variables are assigned the value of 1.
* Return type of object
    * `defined? valA` returns `"local-variable"`
    * `defined? print` returns `"method"`
    * non objects will return `"nil"`
* Parallel assignment
    * If we wanted to swap values of variable `varA` and `varB` without introducing an intermediary variable:
        * `varA, varB = varB, varA`


# Data Types

## Strings
*   Strings can be formed from either `'single'` or `"double"` quotes.
    * Ruby shell will display a returned strings with `"double"` quotes.
    * Use double quotes when embedding an apostrophe, `str = "It's not ..."`.
        * Use escape character `\` when using single quotes, `str = 'It\'s not ...'`.
* Formatting characters include:
    * `\n` newline
    * `\t` tab
    * `\s` space
* Multi-line String with [Here Document](https://en.wikipedia.org/wiki/Here_document#Ruby) 
```ruby
str = <<HERE
    This is a 
    multi-line string
HERE
# HERE can be replaced with your own text e.g. 
# <<SHOPPING_LIST
# ...
# SHOPPING_LIST
```
* Multiple string variables can be assigned with `.split` method.

```ruby
city, state, country = "SF,CA,USA".split(',')
# delimit the delimiter .split(/,/)
```
* Trailing spaces can be removed with `.squeeze` method.

```ruby
"squeeze    ".squeeze()
# Result => "squeeze "
# last space is kept
```

* String from `gets` will return user input string followed by `\n` newline character.
    * This can be removed by `.chomp`

## Numbers

### Acceptable Numbers
* Integers:
    * 0, 5, -25,  etc..
* Floating Point:
    * 1.168
    * 0.3333
        * Zero is required.
* Binary:
    * `0b101010` => 42
* Hexadecimal
    * `0xFF` => 255

### Working with Numbers

* Numbers in ruby are part of the Number class and therefore are objects. Meaning, Numbers can have build-in methods:
    *  For example, `1.to_s` converts to string.
    * `1.class` displays the type as integer.
<!--* Numbers can shift between numeric types.
-->
* Valid operations:
    * Addition: `1 + 1`
    * Subtraction: `9.6 - 0.33`
    * Multiplication: `6 * 7`
    * Division: `4 / 2`
        * `4.div(2)`
    * Power: `3 ** 4`
    * Modulus: `15 % 3`
        * `15.modulo(3)`
    * Negation:`-1` 


## Boolean
* Valid Boolean:
    * true
    * false
* Expressions:
    * `4 > 2` returns `true`. 
    * `4 < 2` returns `false`.
    * `2 > 2` returns `false`.
* Negation:
    * `!true` returns `false`.
    * `!!true` returns `true`.

## Expressions
### Relational Operators
* Valid relational Operators: `>, =>, <, <=, ==` .
* Comparable Operator `<=>`
    * Relative comparison returns 1 or 0 or -1
    * `A <=> B`
        * return 1 if A > B
        * return 0 if A = B
        * return -1 if A < B
        * return `nil` if not comparable. 
### Logical Operators

* Combine multiple expressions with valid Logical Operators:
    * `and`, `or`, `not`
    * c-style: `&&`, `||`, `!`


# Data Structures

## Arrays

* Initialized by `[]`
    * `arr = [67, 34, 54, 33]`
    * Zero based index access:
        *  `arr[0]` returns `67`.
<!--'===' case equality operator-->  
## Ranges
* Inclusive range `1..3`, returns a number range from 1 to 3
* Exclusive range `1...3`, returns a number range from 1 to 2
* Methods on `rng = 1..3`:
    * `rng.max` returns `3`
    * `rng.min` returns `1`
    * `rng.to_a` returns `[1, 2, 3]`
    * `rng.include?(1)` returns `false`
        * Case equality operator `rng === 4` returns `false`
    * `rng.each` iterate over each member.
* Ranges also works with alphabet ranges `rng = 'a'..'z'`

## Associative Arrays or Hash
* Stores key value pairs
* Initialized by `{}`
```ruby
items = {
    'piano'=>'instrument',
    'hammer'=>'tools',,
    'pizza'=> 'food'
}
```
* Value retrieved by key `items['hammer']` returns `'tool'`.
    * `nil` is returned if key doesn't exist.
    

