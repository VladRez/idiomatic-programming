# Inheritance

It's a porgramming concept of integrating two classes with an is-a relationship. 


Specifying common traits for different objects:

Consider:

```ruby
class Employee
    attr_reader :first_name, :last_name

    def initialize(first_name, last_name, id_number)
        @first_name = first_name
        @last_name = last_name
        @id_number = id_number
    end

    def to_s
        "#{first_name} #{last_name}"
    end
end
```

However similar classes have different requirements.

+ `super` if we want to have the same constructor but different parameters.

```ruby
class Sales < Employee
    def initialize (first_name, last_name, id_number, customer_portfolio)
        super first_name, last_name, id_number
        @customer_portfolio = customer_portfolio
    end
end

class Engineer < Employee
    def initialize(first_name, last_name, id_number, software_tools)
        super first_name, last_name, id_number
        @software_tools = software_tools
    end
end
```

# Encapsulation

Limiting the the amount of data we want to expose. 

+ `attr_reader` to specify which *instance* variables we want to expose, also known as a getter. 
    + By default all data is private and all methods are public. 
    + Use `private` and anything below that line is only available within the object.
+ `attr_writer` to specify which *instance* variable we want to have the ability to change also known as setter method. 


# Polymorphism

A way of changing the implementation of a base class method. 

consider the change to base class

```ruby
class Employee
    attr_reader :first_name, :last_name

    def initialize(first_name, last_name, id_number)
        @first_name = first_name
        @last_name = last_name
        @id_number = id_number
    end

    def to_s
        "#{first_name} #{last_name}"
    end

    def show_hash
        "EMP#{first_name[0]}#{last_name[0]}#{@id_number}"
    end 
end
```

The idea of polymorphism is taking the same method and changing or override its behavior using the common attributes.

```ruby
class Sales < Employee
    def initialize (first_name, last_name, id_number, customer_portfolio)
        super first_name, last_name, id_number
        @customer_portfolio = customer_portfolio
    end

     def show_hash
        "SALES#{first_name[0]}#{last_name[0]}#{@id_number}"
    end 
end

class Engineer < Employee
    def initialize(first_name, last_name, id_number, software_tools)
        super first_name, last_name, id_number
        @software_tools = software_tools
    end

     def show_hash
        "ENGR#{first_name[0]}#{last_name[0]}#{@id_number}"
    end 
end
```

Extract methods is a common polymorphic practice.

For example the base class should not even have an implementation and therefore an error should be raised. 

```ruby
class Employee
    attr_reader :first_name, :last_name

    def initialize(first_name, last_name, id_number)
        @first_name = first_name
        @last_name = last_name
        @id_number = id_number
    end

    def to_s
        "#{first_name} #{last_name}"
    end

    def show_hash
        raise NotImplementedError, "No implementation for base class"
    end 
end
```

# Duck Typing 

This is a Ruby specific feature where unlike inheritance, duck typing relies on common class methods rather then inheritance hierarchy. 


```ruby
class Employee
    attr_reader :first_name, :last_name

    def initialize(first_name, last_name, id_number)
        @first_name = first_name
        @last_name = last_name
        @id_number = id_number
    end

    def to_s
        "#{first_name} #{last_name}"
    end

    def show_hash
        "EMP#{first_name[0]}#{last_name[0]}#{@id_number}"
    end 
end

class Car
    attr_reader :make, :model, :year
    
    def initialize(make, model, year)
        @make = make
        @model = model
        @year = year
    end

    def to_s
        "#{make} #{model} #{year}"
    end

    def show_hash
        "#{make[0]}#{model[0]}#{year}"
    end
end

emp = Employee.new("Nate", "Taleb", 12)
car = Car.new("Honda","Civic", 2017)

[emp, car].each do |entity|
   p entity.show_hash
end

# Output: 
# "EMPNT12"
# "HC2017"
```
