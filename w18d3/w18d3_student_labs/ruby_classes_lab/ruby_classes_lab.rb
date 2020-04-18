# Create Muppets

# Create a Muppet class that takes in a name and run puts "This muppet is called #{name}!" inside initialize.
# Assign the muppet a random color on initialize. Hint: make a small array and use .sample


class Muppet
    attr_reader :name
    def initialize name
        colors = %w(white red blue green orange)
        @name = name
        @color = colors.sample
        p "This muppet is called #{name}!"
    end

    def honk
        name = self.name
        p "#{name} is making a honking sound!"
    end

    def flail
        name = self.name
        p "#{name} is flailing its arms!"
    end
end

oscar = Muppet.new "Oscar"
oscar.honk
oscar.flail


# Create Birds

# Create a Bird class that takes in an adjective and a name and puts "#{name} is a(n) #{adjective} bird!" inside initialize.
# Assign the bird a species at random on initialize. Hint: make a small array and use .sample
# Here is an array of bird species, for your convenience



class Bird 
    attr_accessor :name
    attr_accessor :adjective
    def initialize name, adjective
        species = ['Belted Kingfisher', 'Yellow-Billed Cuckoo', 'White-Cheeked Pintail', 'Cinnamon Teal', 'Lesser Scaup', 'Bufflehead', 'Common Goldeneye', 'Fulvous Whistling Duck', 'Hooded Merganser', 'White-Winged Scoter', 'Chimney Swift', 'Rufous Hummingbird', 'Chuck-Wills-Widow', 'Whip-Poor-Will', 'Albatross', 'Ruddy Turnstone', 'Piping Plover', 'Killdeer', 'Laughing Gull', 'Marbled Godwit', 'Least Tern', 'New World Warbler']
        @name = name
        @adjective = adjective
        @species = species.sample
        p "#{name} is a(n) #{adjective} bird!"
    end

    def hungry
        name = self.name
        p "#{name} wants some regurgitated worms!"
    end
    def fly
        name = self.name
        p "Flap! #{name} is taking flight!"
    end
end

bird1 = Bird.new "Woody", "Smart"
bird1.hungry
bird1.fly
p bird1.name
p bird1.adjective
bird1.name = "Chris"
bird1.adjective = "Intelligent"
p bird1.name
p bird1.adjective


