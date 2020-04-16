

# "Chris Murphy".class.superclass

# "Chris Murphy".upcase

# 12345.class

# 123.times do
#   p "Hello!"
# end


# ## added a method to the string class
# class String
# #best practice is to remove the parantheses around parameters (word)  
#   def is_palindrome? word
#    word == word.reverse
#   end
# end

# ###the syntax below is weird see below for proper set up
# p "a toyota".reverse.upcase.is_palindrome?("atoyota")
# #best practice is to remove the parantheses
# p "a toyota".reverse.upcase.is_palindrome? "atoyota"

# # class String
# class String
#   def is_palindrome?
#     word = self.downcase.gsub " ", "" 
#     word == word.reverse
#   end
# end


# p "A toyoTa".is_palindrome?
# p "Sit on a potato pan Otis".is_palindrome?


# class String
#   def is_uppercase?
#     #return is implied so not needed below
#     self == self.upcase
#   end
# end

# p "CHRIS".is_uppercase?
# p "chris".is_uppercase?
# p "Chris".is_uppercase?

# ###Make it so we can update properties
class World
    #shorthand for reader/getter method to read the shape of the object
    # attr_reader :shape
    #shorthand for writer/setter method to set the shape of the object
    # attr_writer :shape
    # if you want a getter and setter in one you can replace the above with
    attr_accessor :shape
  
    attr_reader :people
  
  
    # runs when object instance is created
    def initialize name, shape="oblate spheroid"
      @name = name
      @shape = shape
      @people = []
      @hip_hop_name = "DJ #{@name}"
    end
    #getter - retrieves name
    def name
      @name
    end
  
    # def people 
    #   @people
    # end
    #setter -  sets name
    def name=planet_name
      @name = planet_name
    end
  
    def populate name, age
      # << shovel operator substitutes push() that shovels things on to an array
      @people << { name: name, age: age}
    end
  
  end
  
  # world1 = World.new "Panthalassa"
  # world2 = World.new "Tatooine" , "sphere"
  # world3 = World.new "Nothing But Shrimp" , "dome"
  # world4 = World.new "San Junipero", "cylinder"
  
  # p world1.shape
  # world1.shape = "cube"
  # p world1.shape
  # world1.populate "Chris", 24
  # world1.populate "Tara", 21
  # world1.populate "Ira", 43
  # p world1.people
  # p world2
  # p world3
  # p world4
  
  
  
  # class Galaxy 
  #   def initialize name 
  #     @name = name
  #     @people = []
  #   end
  
  #   def name
  #     @name
  #   end
  
  #   def people 
  #     @people
  #   end
  
  #   def name=value
  #     @name = value
  #   end
  
  #   def populate
  #     # << shovel operator substitutes push() that shovels things on to an array
  #     @people << { name: "Shrimpy McShrimsky", age: 20}
  #   end
  # end
  
  # Galaxy = Galaxy.new
  # p Galaxy
  
  # Galaxy.name = "Milky Way"
  # p Galaxy
  
  # p Galaxy.people
  # Galaxy.populate
  # Galaxy.populate
  # Galaxy.populate
  # p Galaxy.people
  
  
  # planets = %w(Mercury Venus Earth Mars Jupiter Saturn Uranus Pluto)
  # # populate milky way with worlds from our planets array
  # milky_way = []
  
  # planets.each do |planet|
  #   world = World.new planet
  #   milky_way << world
  # end
  
  # p milky_way
  
  
  #--------------------------------
  # Calling Methods on a Class
  
  class Mathy
    def self.formula_1 (a, b, c)
       a + b * c
     end
    def self.subtract_and_divide a , b, c
      (a - c ) / b
    end
  
    def self.powers_of_3 a
       a * a * a / 3
    end
  end
  
  
  Mathy.formula_1 5, 2, 7
  Mathy.subtract_and_divide 5 ,2, 7
  Mathy.powers_of_3 3
  
  # mathy = Mathy.new
  # mathy.formula_1 5 ,2, 7