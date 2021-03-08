# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]

# def onlyOddsSorted array 
#   p array.select({ |value| value.is_a?(Integer) }).map({ |value| value.odd? })
# end

def only_odds_sorted array
  array.filter_map{ |value| value if value.is_a?(Integer) && value.odd?}.sort
end

p only_odds_sorted fullArr1
p only_odds_sorted fullArr2

# --------------------2) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_a = 'a'
# Expected output: ['tea', 'water', 'soda water']


def filter_words_with_letter array, letter
  array.filter_map{ |value| value if value.include? letter }
end

p filter_words_with_letter beverages_array, letter_o
p filter_words_with_letter beverages_array, letter_a


# -------------------3) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'


def remove_vowels string
  string.delete 'aeiouAEIOU'
end

p remove_vowels album1
p remove_vowels album2
p remove_vowels album3


# --------------------4) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :model, :wheels, :current_speed
  def initialize model
    @model = model
    @wheels = 2
    @current_speed = 0
  end

  def get_info
    # puts "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    puts "The #@model bike has #@wheels wheels and is going #@current_speed mph."
  end

  def pedal_faster
    @current_speed += 10
  end

  def brake
    (@current_speed > 15) ? @current_speed -= 15 : @current_speed -= @current_speed
  end
end

my_bike = Bike.new 'Trek'
my_bike.get_info
my_bike.pedal_faster
my_bike.get_info
my_bike.pedal_faster
my_bike.pedal_faster
my_bike.pedal_faster
my_bike.get_info
my_bike.brake
my_bike.get_info
my_bike.brake
my_bike.get_info
my_bike.brake
my_bike.get_info


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
