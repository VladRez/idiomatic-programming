# Common Bad Design and Practices

Code smells arise when the program design is bad.

## Comments

Only use comments when there's no other way to explain the code. Code should be clear enough to describe intent. 

## Duplicate Code

One of the most impractical practices is copying code that works in one place into another, and doing it multiple times.

The danger arises when a change needs to be made, you will need to change it in many different places.

## Data clump

When more than one variable is closely related to another. Instead of plassing them individually refactor to combine them. 


```ruby
class Employee
    attr_reader :first_name, :last_name, :id_number
    
    def initialize(first_name, last_name, id_number)
        @first_name = first_name
        @last_name = last_name
        @id_number = id_number
    end

    def create_hash(first_name, last_name, id_number)
        "#{first_name[0]}#{last_name[0]}-#{id_number}"
    end

end
```

```ruby
class Employee
    attr_reader :first_name, :last_name, :id_number
    
    def initialize(first_name, last_name, id_number)
        @first_name = first_name
        @last_name = last_name
        @id_number = id_number
    end

    def employee_details
        [first_name, last_name, id_number]
    end

    def create_hash(employee_details)
        "#{first_name[0]}#{last_name[0]}-#{id_number}"
    end
end
```

## Divergent Change

This occurs when code has more than one responsiblity. So when a change is required at one point for one reason and then it needed to be changed for another reason at a different point then consider refactoring. 

## Feature Envy

When a class is constantly requesting messages from another class. 

```ruby
class Player
    attr_reader :name, :score

    def initialize(name, score)
        @name = name
        @score = score
    end

end

class Game
    attr_reader :game_player
    
    initialize (game_player)
        @game_player = game_player
    end

    def game_info
    # constantly requesting properties of Player
        "#{game_player.name}: #{game_player.score}" 
    end
end
```

refactor to delegate

```ruby
class Player
    attr_reader :name, :score

    def initialize(name, score)
        @name = name
        @score = score
    end

    def game_info
        "#{name}: #{score}" 
    end
end

class Game
    attr_reader :game_player
    
    initialize (game_player)
        @game_player = game_player
    end

   def get_game_info
    game_player.game_info
   end
end
```

## Longe Methods

When you have a method that's more than 8-10 (6 - 8) in ruby. You may be doing something wrong.

A complex algoriths with difficulty breaking it apart means there are too many entangled dependencies. Keep your methods short and isolated.

## Primitive Obsession

Consier this as primitive even though these are objects in ruby:

+ Array
+ Hash 
+ Number


```ruby
class Coordinate
    attr_reader :x, :y, :z
    def initialize (x, y, z)
        @x = x
        @y = y
        @z = z
    end
end

point_obj = Coordinate.new(1,4,3)
# better than
point_arr = [1, 4, 3]
```

<!-- ## Conditionals

Avoid using conditionals and consider using polymorphism instead. This is so becuase conditionals allow for branching. -->