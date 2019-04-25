# Outputting and Displaying Data

* `puts("text")` displays user data to the shell
    * This method adds a newline `\n` at the end.
    * Parenthesis are optional.
    * Accepts multiple arguments, `puts("A","B")`, delimited by a newline character.
* `print("text")` display without a newline `\n` character.
    * Accepts multiple arguments with a comma and not delimited
* `gets` retrieves data from user keyboard input.
    * Receives all of it's data as a string, this includes numbers.
    * Variable assigned with this method will be concatenated with a newline `\n` character.
        * Use `Integer(variable)` or `Float(variable)` to cast from string to number.
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

### Valid Numbers

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
        * `variable += 1`
    * Subtraction: `9.6 - 0.33`
        * `variable -= 1`
    * Multiplication: `6 * 7`
        * `variable *= 1`
    * Division: `4 / 2`
        * `variable /= 1`
        * `4.div(2)`
        * dividing by zero will crash the program with `ZeroDivisionError`
    * Power: `3 ** 4`
    * Modulus: `15 % 3`
        * `variable %= 1`
        * `15.modulo(3)`
    * Negation:`-1` 


## Boolean

* Valid Boolean:
    * `true`
    * `false`
* Expressions:
    * `4 > 2` returns `true`. 
    * `4 < 2` returns `false`.
    * `2 > 2` returns `false`.
* Negation:
    * `!true` returns `false`.
    * `!!true` returns `true`.

# Expressions

## Relational Operators

* Valid relational Operators: `>, =>, <, <=, ==` .
* Comparable Operator `<=>`
    * Relative comparison returns 1 or 0 or -1
    * `A <=> B`
        * return 1 if A > B
        * return 0 if A = B
        * return -1 if A < B
        * return `nil` if not comparable. 

## Logical Operators

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

## Hash (Associative Array)

* Stores key value pairs.
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
    

<!-- ## Relational Expressions -->
# Control Structures

## Decision Structure

* `if`

```ruby

if variableA > 80
    puts("true")
end
```

* `if` `else`

```ruby
if variableA <= 100
    puts("true")
    else
    puts("false")
end
```

* `elsif` 

```ruby
if trafficLight == "Green"
    puts("Go")
    elsif trafficLight == "Yellow"
    puts("Slow")
    else trafficLight == "Red"
    puts("stop")
end
```

* `case` expression

```ruby
case mph
    when 70..100
        speedStatus = "speeding"
    when 45..69
        speedStatus = "safe"
    when 1..44
        speedStatus = "slow"
    else
        speedStatus = "stalling"
end
puts(speedStatus)
```
### Looping Structure

* `while` comparison
    * while something is true
```ruby
while true
    puts("infinite loop")
end

controlVar = 0

while controlVar < 10
    puts(controlVar)
    controlVar += 1
end
```
* `until` comparison
    * until something is true
```ruby
controlVar = 0
until controlVar > 5
    puts(controlVar)
    controlVar += 1
end
```
* Use `break` to end the loop.
    * Not best practice to end loop early without control logic.
```ruby
controlVar = 0

while controlVar < 10
    puts(controlVar)
    if controlVar == 5 
        break
    end
    controlVar += 1
end
```
<!---
* `redo`
    * when user enters a wrong input for example, redo restarts from the top
-->
### Iterators

* Traverse a range and perform operation on N member items.
* `.times` repeats an operation N times
```ruby
5.times do
    puts("hello") # print hello 5 times
end
```
* `.upto()` 
```ruby
0.upto(10) do |n|
    puts(n) # print 0 up to 10
end
```
* `.step()`

```ruby
0.step(1000,100) do |n|
    puts(n) # prints 0 to 1,000 skipping 100 at each iteration
end
```
* For `.each` loop
```ruby
arr = [30, 18, 45, 8]
arr.each do |ele|
    puts(ele) # prints each element, not index
end
```
* For `.in` loop (same behavior as for each in other languages)
```ruby
arr = [30, 18, 45, 8]
for ele in arr
    puts(ele) # prints each element
end
```
* Use `next` to skip an iteration.
    * Works with `while` loops
```ruby
arr = [30, 18, 45, 8]
for ele in arr
if ele % 2 == 0 
    next
end
    puts(ele) # prints each element
end
```
Side Note: Coming from a c-style language where loops are in the style of `initializer; boolean; steps`
```javascript
for(i = 0; i < array.length; i++){
    //do something
}
```
In ruby you can achieve the same with
```ruby
(0..array.length - 1).step(1).each do |i|
print(i, "\t", array[i])
end
```
# Methods (functions)
* Formed with `def` keyword
* Takes in any number of arguments
```ruby
#define a method
def isPrime?(num)
    (2...num).each do |n|
        if num % n == 0
            return false
        end
    end
    return num > 1
end

#call a method
prints(isPrime?(5)) # return true
prints(isPrime?(4)) # return false
```

* arguments can be assigned with a default value

```ruby
def toFX(amount, rate = 0.5)
    return amount * rate
end 
puts(toFX(100)) # returns 50
puts(toFX(100,1)) # returns 100
```

* For Methods with a list of arguments/parameters, append a `*` to arguments. 
    * arguments are converted into an array

```ruby
def totalSum(*a)
sum = 0
    for ele in a
        sum += ele
    end

    return sum
end

puts(totalSum(5, 1, 4)) # Outputs 10
```

### Procedures

* Methods that don't return values
    * Also used as a [*side effect*][side_effect]

```ruby
# Display a message
def displayError(error)
    print("Warning ", error)
end
```
# Class

* Defining an abstract data type (ADT)
    * properties (Attributes)
    * behaviors (Operations)
    * Initializer (Constructor)
        * Fields (Members)

```ruby
class Car
    # main Initialize/constructor
    def initialize(type, year)
    #Fields
        @type = type
        @year = year
    end
end
```

* From an entry point we will create a new *instance* variable of type class
    * `Class_Name.new()` will invoke the initializer and assign each argument to the corresponding field/member 

```ruby
myCar = Car.new("sedan","2007")
```

Invoking `variable_name.inspect` will show the state of the object. If the variable properly initialized the object we will see aninternal name followed by the initialized fields.

By convention some implementation of a to string `to_s` method is used to display the *state* or the important data of a class object.

```ruby
class Car
    # main Initialize/constructor
    def initialize(type, year)
    #Fields
        @type = type
        @year = year
    end
    
    def to_s
        print("Car Type: " + @type + " and year " + @year)
    end
end
```

Additionally we also want to access and write each individual attribute.


```ruby
class Car
    # main Initialize/constructor
    def initialize(type, year)
    #Fields
        @type = type
        @year = year
    end
    
    # read type
    def type
        return @type
    end

    # write type
    def type=(my_type)
        @type=my_type
    end
    
    # read year
    def year
        return @year
    end
    
    # write year
    def year=(my_year)
        @year=year
    end

    def to_s
        print("Car Type: " + @type + " and year " + @year)
    end
end
```

Alternatively:

```ruby
class Car
    # main Initialize/constructor
    def initialize(type, year)
        # attributes
        @type = type
        @year = year
    end
    
    attr_reader :type, :year
    attr_writer :type, :year

    def to_s
        print("Car Type: " + @type + " and year " + @year)
    end
end
```

+ Class Variables are variables whos values are available through each and every instances of a class.
    + Formed by combining `@@` and a variable name with a value
    + Also known as `static` variables

```ruby

class Car

@@instance_number = 0

# main Initialize/constructor
    def initialize(type, year)
        # attributes
        @type = type
        @year = year
        @@instance_number += 1
    end
    
    attr_reader :type, :year
    attr_writer :type, :year

    def to_s
        return "Car Type: " + @type + " and year " + @year.to_s 
    end
end

```
+ Class Methods are methods which can be called from the class and an instance of a class. 
    + Referred to as `self`


```ruby

    def self.instances
      return @@instance_number
    end

```

+ The number of instances can be retrieved with `Car.instances`. 

<!-- ## Inheritance

The ability of a specialized sub-class to inherit the instance variables and methods of a super class.


Consider a super class:

```ruby

class Vehicle
	def initialize(manufacturer)
		@manufacturer=manufacturer
	end

	attr_reader :manufacturer
	attr_writer :manufacturer

	def to_s
		return "Manufacturer: " + @manufacturer.to_s
	end
end
```

+ `<` is used when defining a subclass.
+ `super()` - a call that will get from the initialization details of of a super class.  


```ruby
class Car < Vehicle
	def initialize(manufacturer, type)
		super(manufacturer)
		@type=type
	end

	def to_s
		return super + " Car type: " + @type
	end
end
``` -->


[side_effect]: "https://softwareengineering.stackexchange.com/questions/40297/what-is-a-side-effect"
