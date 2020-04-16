# planets = %w(Mercury Venus Earth Mars Jupiter Saturn Uranus Pluto)

# planets.each do |planet|
#   p planet if planet.length > 5
# end

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
  
  
    # runs when object instance is created
    def initialize name, shape="oblate spheroid"
      @name = name
      @shape = shape
      @people = []
    end
    #getter - retrieves name
    def name
      @name
    end
  
    def people 
      @people
    end
    #setter -  sets name
    def name=planet_name
      @name = planet_name
    end
  
    def populate
      # << shovel operator substitutes push() that shovels things on to an array
      @people << { name: "Shrimpy McShrimsky", age: 20}
    end
  
  end
  
  world1 = World.new "Panthalassa"
  world2 = World.new "Tatooine" , "sphere"
  world3 = World.new "Nothing But Shrimp" , "dome"
  world4 = World.new "San Junipero", "cylinder"
  
  p world1.shape
  world1.shape = "cube"
  p world1.shape
  p world1
  p world2
  p world3
  p world4
  
  
  
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