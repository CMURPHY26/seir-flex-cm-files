#CONVERTING JAVASCRIPT FUNCTIONS FOR RUBY

# Get Name
# Write a method that accepts a name from the user and then returns it. Here's the javascript:

# const getName = () => {
#   let name = prompt("what is your name?");
#   return name;
# };

# def get_name 
#     name = gets.chomp
#     p name
# end

# get_name


# Reverse It
# Write a method that reverses a string. Here's the javascript:

# const reverseIt = () => {
#   let string = "a man, a plan, a canal, frenemies!";

#   let reverse = "";

#   for (let i=0; i < string.length; i++) {
#     reverse += string[string.length - (i+1)];
#   };

#   alert(reverse);
# };

# string = "a man, a plan, a canal, frenemies!"
# def reverse_it str
#     puts str.reverse
# end
# reverse_it(string)


# Swap Em
# Write a method that swaps the values of two variables around. Here's the javascript:

# const swapEm = () => {
#   let a = 10;
#   let b = 30;
#   let temp;

#   temp = b;
#   b = a;
#   a = temp;

#   alert("a is now " + a + ", and b is now " + b);
# };


# def swap_em 
#     a = 10
#     b = 30
#     temp = 0
#     temp = b
#     b = a
#     a = temp
#     p "a is now #{a}, b is now #{b}"
# end

# swap_em


# Multiply Array
# Write a method that multiplies all numbers in a given array and returns the final product. Here's the javascript:

# const multiplyArray = (ary) => {
#   if (ary.length == 0) { return 1; };

#   let total = 1;
#   // let total = ary[0];

#   for (let i=0; i < ary.length; i++) {
#     total = total * ary[i];
#   };

#   return total;
# };

# def multiply_array ary
#     total = 1
#     if ary.size == 0
#         return 1
#     elsif ary.size > 0
#         ary.each do |i|
#             total *= i
#         end
#         return total
#     end
# end

# p multiply_array([1,2,3,4])


# Fizz Buzzer
# Write a method that takes a number argument and returns "fizz" if the number is divisible by three, "buzz" if the number is divisible by five, and "fizzbuzz" if it's divisible by both. Here's the javascript:

# const fizzbuzzer = (x) => {
#   if( x%(3*5) == 0 ) {
#     return 'fizzbuzz'
#   } else if( x%3 == 0 ) {
#     return 'fizz'
#   } else if ( x%5 == 0 ) {
#     return 'buzz'
#   } else {
#     return 'archer'
#   }
# }

# def fizzbuzzer (x) 
#     if x % 15 == 0
#         p "fizzbuzz"
#     elsif x % 5 == 0 
#         p "buzz"
#     elsif x % 3 == 0
#         p "fizz"
#     else
#         p "archer"
#     end
# end


# fizzbuzzer(8)


# Nth Fibonacci
# Write a method that finds the fibonacci number at the nth position and returns it. Here is the javascript:

# const nthFibonacciNumber = () => {
#   let fibs = [1, 1];
#   let num = prompt("which fibonacci number do you want?");

#   while (fibs.length < parseInt(num)) {
#     let length = fibs.length;
#     let nextFib = fibs[length - 2] + fibs[length - 1];
#     fibs.push(nextFib);
#   }

#   alert(fibs[fibs.length - 1] + " is the fibonacci number at position " + num);
# };

# def nth_fibonacci_number 
#     fibs = [1,1]
#     num = $stdin.gets.chomp.to_i

#     while fibs.length < num
#         length = fibs.length
#         next_fib = fibs[length - 2] + fibs[length - 1]
#         fibs[fibs.length] = next_fib
#     end
#     p "#{fibs[fibs.length - 1]} is the fibonacci number as position #{num}"
# end
# nth_fibonacci_number