# "#" starts single comment in Ruby

#Most variables use snake_case naming conventions
# long_variable_name = 1

#The equivalent of console.log() is puts
# Functions in ruby don't need parentheses, but you can use them

# puts ('hi')
# puts 'hi'
# p 'hi'
# p 1

#We can also retrieve values from user input using gets
# some_var = gets
# puts some_var

# command_line = gets
# puts command_line

# puts "Ruby" #double quotes
# puts 'Python' #single quotes

# puts "Ruby".size #string method to get length of string
# #or use .length - puts "Ruby".length

# puts "Ruby".upcase #uppercase a string
# puts "RUBY".downcase #downcase a string

# puts 23.to_s #convert a number to a string
# p 23.to_s #convert a number to a string

# foo = "bar"

# puts "Oh hai #{foo}" #string interpolation
# puts 'Oh hai #{foo}' #string interpolation doesn't work with single quotes

# long_string = <<-EOF
# asdfkajsdf;alsdf
# asdfkajsdfsdf
# asdfjkasdfa
# sdfjasdf
# EOF
# puts long_string

#Ruby booleans work essentially the same as in JavaScript:

# a = false
# b = true
# p a && b
# p a || b



#Integers
#puts does some interesting things to numbers. These are consistent, but somewhat different from the interesting things that JavaScript does.
# puts 5 / 2 #rounds
# puts 122 #normal
# puts 0x7a #hex value
# puts 0172 #octal
# puts 0b1111010 #binary
# puts 23_482_345_629 #long numbers: substitute _ for ,


#Floats
# p 5.0 / 2 #force a float
# p 5.fdiv 2 #float division method that allows you to convert to float
# p 12.to_f #convert to float
# p sprintf "%.4f" % (1/3.0) #format a value
# p 1.2e-3 #scientific notation


#BigDecimal and require
#Ruby, much like Node, can require packages (gems) to augment the default functionality of Ruby. Some of these packages need to be downloaded (gem install), but some are available by default, like bigdecimal.

# puts 1.2 - 1.0

# require 'bigdecimal'

# puts BigDecimal("1.2") - BigDecimal("1.0") #outputs 0.2E0 - scientific notation

# require ('bigdecimal');
# puts BigDecimal('0.0000000000001') #output in scientific notation


#Rational Numbers
# p 2.to_r #outputs (2/1)
# p Rational 0.5 #outputs (1/2)
# p 2/3r #can use fraction notation
# p 2/3r+1 #can combine fraction notation with other math
#Note: This is, depending on whom you ask, one of the best or worst parts of Ruby--you can write things in A LOT of different ways. You can pick whichever way makes the most sense to you for project 4, but just make sure that you are consistent.


# nil
# a = nil #same as null
# puts a #outputs nothing


# Symbols
# Symbols can be substituted for strings
# light = 'on'
# p light
# light = :on
# p light

# When using values that won't change, we can use symbols. Symbols are like strings, but are faster for the following reasons:

# For each symbol value, there is only one instance. Symbols with the same value reference the same chunk of memory.
# p :name.object_id
#  p :name.object_id #:name is the same object in memory as :name on the previous line
#  p "name".object_id
#  p "name".object_id #this is a different string, and therefore a different place in memory than "name" above


#  Symbol is smaller than String

#  p :name.methods.size
#  p "name".methods.size


# Arrays
# Arrays in Ruby are similar to JS, but have a couple extra shortcuts:
# a = [1,4,6]
# p a

# b = Array(1..6) # 1-6 - called a range
# p b

# c = Array(1...6) # 1-5 (all numbers up to, but **not including** the second one)
# p c


# Hashes
# Ruby hashes are essentially like JS objects, but without methods:

# domains = {'location' => "United States"}
# p domains
# domains = {:location => "United States"} #creates a symbol to take up less space in memory
# p domains

# domains = { 'de' => "Germany", 1 => "Slovakia", :us => "United States" }
# p domains
# p domains['de']
# p domains[1]
# p domains[:us]

# Everything is an Object
# Just like in JavaScript, every possible value has properties and methods that we can access with "dot notation":
# p true.class, false.class #TrueClass,FalseClass
# p "Ruby".class #String
# p 1.class # Integer
# p 4.5.class # Float
# p 3_463_456_457.class # Integer like 3,463,456,457 
# p :age.class # Symbol
# p [1, 2, 3].class # Array
# p({ :name => "Jane", :age => 17 }.class) # Hash



# Conversion
# With Ruby, we can easily convert between data types:

p '4'.to_i #to integer