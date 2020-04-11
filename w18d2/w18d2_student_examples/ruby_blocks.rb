# Compare JS forEach with Ruby each
# Here's our JS forEach

# const myArray = ['one', 'two', 'three'];
# myArray.forEach((str)=>{
# 	console.log('the value is ' + str);
# });


# Here's the ruby version of the same code.

# ['one', 'two', 'three'].each do |str|
# 	puts 'the value is ' + str
# end

# All code from do to end is called a ruby "block", since it's a block of code that the call function executes. It's just like the anonymous functions of JavaScript.

# There's even a version of the code that takes only one line

# ['one', 'two', 'three'].each { |str| puts 'the value is ' + str } #short form


# Compare JS map with Ruby map
# Here's our JS map

# const basicArray = [1,2,3];
# const timesTwo = basicArray.map((num)=>{
#   return num * 2;
# });

# console.log(timesTwo);

# Here's the ruby version of the same code

# times_two = [1,2,3].map do |num|
#     num * 2 #return keyword not needed it has an implicit return and returns the mutated array
# end

# p times_two


# Here's the version that takes only one line

# p [1,2,3].map {|num| num * 2}


# Creating your own blocks
# You can create functions that execute blocks.

# let's create our own "each" function. Here's the JS version:

# const each = (array, callback)=>{
# 	for(let i = 0; i < array.length; i++){
# 		callback(array[i]);
# 	}
# }

# each([1,2,3,4], (currentNum)=>{
# 	console.log(currentNum);
# });

# RUBY:
# def each(arr, &blk) #&blk must always be the last parameter
# 	for elem in arr
# 		blk.call(elem)
# 	end
# end

# each 0...5 do |currentNum|
# 	puts currentNum
# end

# The &blk is just a variable that comes in
# The & means pass by reference
# This means that the variable &blk points to something and is not a copy of whatever was passed in
# Therefore &blk is just a reference to the block of code between do and end
# We can execute that code by calling blk.call()



# Describe and use a proc
# A block is just a type of variable called a proc
# procs are just ways to save functions into variables for later use

# log = Proc.new do |el|
# 	puts el
# end
# log.call(5)


# short version:
# log = Proc.new {|el| puts el}
# log.call(5)


# Making callbacks work in JS

# const foo = ()=>{
# 	console.log('hi');
# }

# const bar = (callback)=>{
# 	callback();
# }
# bar(foo)

# foo = Proc.new do
#     puts 'hi'
# end
# def bar(callback)
#     callback.call()
#     #or callback.()
# end
# bar(foo);