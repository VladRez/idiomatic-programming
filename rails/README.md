
# Active Records

## Domain Modeling

### Models

A model represents an entity in a Rails application used to Create, Read, Update and Delete (CRUD) entries in a database.
+ A model is a Ruby class
    + Model name is singular by convention
```ruby
class Book < ApplicationRecord
    #...
end

# Which inherits from
class ApplicationRecord < ActiveRecord::Base
    self.abstract_class = true
end
```
+ By convention the table name is **plural** because it contains many records/rows.

The `Book` Model gives us access to the `books` table, effectively wrapping the table to for CRUD access.
+ The class attributes match the column names.
___
**books** table

|id|title|author|
|--|-----|------|
|1 |ruby|Yukihiro Matsumoto|
|2 |javascript|Brendan Eich|
|3 |python|Guido van Rossum|
___

We create a `books` database to store all our books and a `book` model to access the table.

+  Creating a Model `rails generate [singular model name]`
    

`db/migrate/{timestamp}_create_{model}.rb` creates a migration file

```ruby
class CreateBooks < ActiveRecord::Migration[5.2]
    # Rails will call this method to make database scheme changes
        # This will properly convert field types to match database in use (mysql, postgres, sqlite, etc...)
    def change
        create_table :books do |t|
            #...
            t.timestamps
        end
    end
end
```

`app/models/{model name}.rb` the model itself 

```ruby
class Book < ApplicationRecord

end
# which in turn inherits from
class ApplicationRecord < ActiveRecord::Base

end
```

#### Migrations

Once the instructions for creating database is created, next we run the migrations.

## Summary

### A static webpage

1. The browser sends an HTTP request to a web server.
2. The web server finds the appropriate *.html file.
3. The web server sends a response back to the web browser.

### Rails MVC App

1. The browser issues a request (an incoming URL, e.g. `website.com/users`) to the web server 
    + HTTP verbs `GET`, `POST`, `PATCH`, `DELETE`
2. The web server receives the request and then passes it to the `Router`
    + configured in in `config/routes.rb`
3. The router sends the request to a specific action in the `Controller`
    + The `Controller` is simply a ruby class and the `action` is a ruby method that handles the request.
    + Example of mapping a `GET` request to a controller action: `get "users" => "users#index"`
    + To create a controller `rails g controller [controller name]`
        + `rails g controller Users`
        + creates a new controller file in `app/controllers/users_controller.rb`
        + controller name is plural by convention
        + `UsersController` class inherits from a base class of all controllers called `ApplicationController`


```ruby
class UsersController < ApplicationController
    def index
        # ...
    end
end
```
4. `Controller` interacts with a `Model` class.
    + `Model` represents a real world concept, such as a user on a website. 
        + provides an easier way to be read, update and create entries from a database table.
        + Runs application logic
        + Created with `rails g model [model name]`
            + `rails g model User username:string email:string`
            + Generates a database schema in `db/migrate/`

```ruby
class CreateUsers < ActiveRecord::Migration
    def change
        create_table :events do |t|
            t.string :username #adding a column to the table
            t.string :email

            t.timestamps
        end
    end
end
```
+ Run `rails`/`rake db:migrate` to create the table.
+ The `User` `Model` will automatically gives us access to the `Users` table

```ruby
    class User < ActiveRecord
        # ...
    end
```
    
+ Each row act as an object

|id|username|email|
|--|--------|-----|
|1|oddball|ob9@yahoo.net|
|2|wizard|wzd2@gmail.com|
|3|magma|mma14@live.io|
   
     

5. The `Controller` sends data to the `View` 
    + located in `app/view/users/`
    + `View` renders html with `*.html.erb` template.
        + `<% ruby_method %>` tags executes ruby code without a return value.
        + `<%= ruby_method %>` tags executes ruby code and returns a value.
6. Send result back to the browser as a response.

The controller acts as an intermediary between `Model` and `View`

