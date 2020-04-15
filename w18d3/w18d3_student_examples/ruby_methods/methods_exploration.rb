

# RSTRIP / RSTRIP!
# rstrip returns a copy of string with the trailing white space removed:
# "hello there  ".rstrip returns "hello there"
# "hello there".rstrip returns "hello there"
# rstrip! returns trailing trailing white space from the string. It returns nil if no change was made:
# "hello there ".rstrip! returns "hello there"
# "hello there".rstrip! returns nil
# GOTCHA's: rstrip copies the string, rstrip! modifies the string itself
# puts "hello there " + "friend"
# puts "hello there ".rstrip + "friend"
# puts "hello there ".rstrip! + "friend"
# puts "hello there".rstrip! #nil is returned
# puts ""
# bye = "goodbye for now    "
# bye.rstrip
# puts bye + "friend"
# bye.rstrip!
# puts bye + "friend"

#######################################################
# String
# gsub / gsub!

# gsub
# Returns a copy of str with all occurrences of pattern substituted for the second argument.
gsub_string = "we researched ruby methods"

new_string = gsub_string.gsub(/[aeiou]/, "*");

p "gsub performs substitutions and returns a copy of the string with the substitutions: #{new_string}"
puts " "
p "original string unchanged: #{gsub_string}"
puts " "


# gsub!
# performs substitutions in place
gsub_string2 = "we researched ruby methods"
gsub_string2.gsub!(/[aeiou]/, "*");
p "gsub! performs substitutions in place and mutates the original string: #{gsub_string2}"

##############################################################
# String
# .capitalize()
# 	The capitalize method is a string class method that can take a string and make the first character uppercase and the rest of them lowercase.
# .upcase()
# 	This turns every letter of a string into an uppercase letter.
# .downcase
#     This turns every letter of a string into a lowercase letter.

#     Syntax:str.capitalize!
# Parameters: Here, str is the given string which is to be converted.
# Returns: Copy of the string with the first character in uppercase and remaining in lowercase. And nil if no changes are made.

##############################################################

# Strings
# .downcase/.downcase!
# .swapcase/swapcase!
# These two methods change the case of a selected string. Downcase creates a new string instance where the string is converted to lower case. Downcase! modifies the string in place(change the content of the variable) as opposed to creating a new instance. Downcase! Returns nil if the string is already lowercase
# test_string = “we researched ruby methods”
# puts test_string.downcase   # we researched ruby methods
# puts test_string.downcase!   # nil
# puts test_string.swapcase   # WE RESEARCHED RUBY METHODS


##############################################################
# CHOMPS
# #used to eliminate newline character ‘\n’ attached with the string entered by the user during run time.
# puts "Enter your name"
# str=gets.chomp
# puts "Hi "+str+" lets go play in the sun."


##############################################################
# to_f → converts the value of the number as a float
# # Initializing the number 
# num1 = 51
# num2 = 10.78
# num3 = 1690
# num4 = 183 
# # Prints the int as float 
# puts num1.to_f 
# puts num2.to_f 
# puts num3.to_f 
# puts num4.to_f 
# Output:
# 51.0
# 10.78
# 1690.0
# 183.0
# to_i → converts the value of the number as an integer
# "12345".to_i             #=> 12345
# "99 red balloons".to_i   #=> 99
# to_s → it will return some form of string representation of the object
#    # Initializing the number 
# num1 = 10
# num2 = 16
# num3 = 298
# num4 = 183 
# # Prints the string after  
# # conversion into base  
# puts num1.to_s 
# puts num2.to_s 
# puts num3.to_s(2)
# puts num4.to_s(8)
				
# Output:
# 10
# 16
# 100101010
# 267


################################################################################
# students = ["Ana", "Todd", "Mark", "Jim", "Cathleen", "Ky", "Biren", "Geraldine", "Hanna", "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
# # delete_at
# # Deletes the element at the specified index, returning that element,
# # or nil if the index is out of range.
# students.delete_at(2)
# #deletes "Mark"
# students.delete_at(999)
# #nil
# ## delete_if ##
# # Deletes every element of self for which block evaluates to true.
# # The array is changed instantly every time the block is called, not after the iteration is over.
# students.delete_if {|name| name.length > 4}
# puts students

################################################################################
# Fetch
# Hash - Dictionary-like collection of unique keys and their values (associative arrays)
# Hash Method
# Returns a value from the hast for the given key.
# If the given key doesn’t exist it will raise a KeyError exception.
# If a default has been specified, that value will be return if the key is not found within the Hash.
# Can also run a supplied code block and return the resulted value, instead of a default value.

# # example hash
# h = { "a" => 100, "b" => 200 }
# # return hash without fetch
# p h["a"]
# # fetch the first key in the hash
# p h.fetch("a")
# # fetch the second key in the hash
# p h.fetch("b")
# # fetch a key that doesn't exist in the hash, return default value
# p h.fetch("z","default value")
# # fetch a key that doesn't exist in the hash, run a code block
# p h.fetch("z") {|key| "run code block, with returned result #{key}"}
# # fetch a key that doesn't exist in the hash, return error
# p h.fetch("z")

################################################################################

# # Flatten Method
# # Returns a new array that is a one-dimensional flattening of self, For every element that is an array, extract its elements into the new array.
# array = ["An", "Todd", "Mark", "Jim",]
# array2 = ["Cathleen", "Ky", "Biren", "Geraldine", "Hanna",]
# students = [array2, array,  "Dylan", "Sheila", "Charles", "Soniya", "Jerrica", "Ellen", "Lenin", "Adam", "Stanley", "Matthew", "Anthony", "Joe", "Emily", "Amanda"]
# # print students.flatten
# #flatten! Method
# # Flattens self in place. Returns nil if nothing changed
# array3 = [1,2,3,[4,5,[6,7,8],9,10], 11, 12 ]
# print array3.flatten!(1)

################################################################################

# ## _Arrays_
# ## *Sample*
# ## This method chooses an item at random from the given array
# my_array = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]
# ## returns an item at random from the given array
# p my_array.sample
# p my_array.sample
# p my_array.sample
# ## array.sample(N) returns N random elements from the given array
# p my_array.sample(3)
# p my_array.sample(2)
# p my_array.sample(6)
# ## will not throw an error when operating on an empty array.
# new_array =[]
# p new_array.sample
# p new_array.sample(2)

# check shuffle also

################################################################################

# Arrays
# zip
# What is the ZIP method?
# An ARRAY method that lets you put together TWO arrays.
# You can COMPARE them in parallel.
# BASIC example
# a = [1,2,3,4,5,6]
# b = [10,9,8,7,6,5]
# p a.zip(b)
# Output:
# [[1, 10], [2, 9], [3, 8], [4, 7], [5, 6], [6, 5]]
# DIFFERENT example
# c = [1,2,3,4,5,6]
# d = [7,6,5,4,3,2]
# c.zip(d).each { |c,d| p c == d}
# Output:
# false
# false
# false
# true
# false
# false
# BUT what if the ARRAYS are DIFFERENT LENGTHS?
# Shorter 1st Array
# e = [1,2,3,4,5,6]
# f = [10,9,8,7,6,5,4,3,2]
# p e.zip(f)
# it goes off the first array length
# Output:
# [[1, 10], [2, 9], [3, 8], [4, 7], [5, 6], [6, 5]]
# Shorter 2nd Array
# g = [10,9,8,7,6,5,4,3,2]
# h = [1,2,3,4,5,6]
# p g.zip(h)
#  notice that "nil" is returned wherever the 2nd array does not have a number
# Output:
# [[10, 1], [9, 2], [8, 3], [7, 4], [6, 5], [5, 6], [4, nil], [3, nil], [2, nil]]
# You can even zip with a completely NEW array!
# a = [10,9,8]
# p [1, 2, 3].zip(a)
# Output:
# [[1, 10], [2, 9], [3, 8]]
# From RUBY DOCUMENTATION:
# zip(arg, ...)
# zip(arg, ...) { |arr| block } → nil
# Converts any arguments to arrays, then merges elements of self with corresponding elements from each argument.
# This generates a sequence of ary.size n-element arrays, where n is one more than the count of arguments.


################################################################################

# Array
# .first
# first → obj or nilclick to toggle source
# first(n) → new_ary
# Returns the first element, or the first n elements, of the array. If the array is empty, the first form returns nil, and the second form returns an empty array.
# a = [ "q", "r", "s", "t" ]
# a.first     #=> "q"
# a.first(2)  #=> ["q", "r"]
# .last
# last → obj or nilclick to toggle source
# last(n) → new_ary
# Returns the last element(s) of self. If the array is empty, the first form returns nil.
# a = [ "w", "x", "y", "z" ]
# a.last     #=> "z"
# a.last(2)  #=> ["y", "z"]

################################################################################

# Arrays
# join
# Join takes each element in an array and combines them into a string using .join. A separator can also be entered that will be inserted in between each original value:
# names = ["Heather", "Ira", "Leeanne", "Dejay"]
# p names.join
# #=> "HeatherIraLeeanneDejay"
# #versus
# p names.join("/")
# # => "Heather/Ira/Leeanne/Dejay"
# Join is applied to nested arrays recursively - it will add all elements from each sub-group before moving on to the next one:
# sports_teams = ['Red Sox', ['baseball', 'Boston'], 'Rangers', ['hockey', 'New York']]
# p sports_teams.join("-")
# # => "Red Sox-baseball-Boston-Rangers-hockey-New York"