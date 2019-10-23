# # MTA Lab
#
# ## Objectives:
# * Apply your knowledge of Ruby to solve a real world problem.
# * Get really good at array manipulation.
#
# #### Activity
# * Create a program that models a simple subway system.
#
# * The program takes the line and stop that a user is getting on at and the line
# and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# ```ruby
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```
#
# * There are 3 subway lines:
#   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
#   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
#   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
#   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
#
#
# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

require 'pry'

puts ""
puts "*" * 45
puts "********* MTA Subway in Ruby ****************"
puts "     ____"
puts "_||__|  |  ______   ______   ______"
puts "(        | |      | |      | |      |"
puts "/-()---() ~ ()--() ~ ()--() ~ ()--()"

TRAIN_LINES = {
  :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :L => ["8th", "6th", "Union Square", "3rd", "1st"],
  :"6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor"]
}

EXCHANGE = "Union Square"

def same_line_test(line1, line2)
    line1 == line2 # returns TRUE if the first and last line equals
end

def trip_log (line, stop1, stop2)
  # create an array for the trip stops
  trip_stops =[]

  # push index of first stop of train line
  trip_start = TRAIN_LINES[line].index(stop1)
  # push index of second stop of train line
  trip_end = TRAIN_LINES[line].index(stop2)

  # if start is later in the index, reverse the array
  TRAIN_LINES[line].reverse! if trip_end < trip_start
  # need correct index positions...in case index was reversed
  trip_start = TRAIN_LINES[line].index(stop1)
  trip_end = TRAIN_LINES[line].index(stop2)
  # get array of stations between start and finish
  trip_stops = TRAIN_LINES[line][(trip_start + 1)..(trip_end-1)]
  # trip message travel through stations. Join method joins the array elements.
  p "You must travel through the following stops on the #{ line } line: #{ trip_stops.join(" ") }."
end

def plan_trip(line1, stop1, line2, stop2)
  #convert line input into symbols of TRAIN_LINES hash
  line1 = line1.to_sym
  line2 = line2.to_sym

  p "You are starting at #{ stop1 }."

  if same_line_test(line1, line2)
    p "You are remaining on the same line, no need to change trains."
    trip = trip_log(line1, stop1, stop2)

# binding.pry
  elsif stop1 == EXCHANGE
    trip_log(line2, stop1, stop2)
  elsif stop2 == EXCHANGE
    trip_log(line1, stop1, stop2)
  else
      trip_log(line1, stop1, EXCHANGE)
      trip_log(line2, EXCHANGE, stop2)
  end
  p "Your final stop is #{ stop2 }."
  p "*" * 45
end

# Test data ######################################

plan_trip('N', '23rd', 'N', 'Times Square')
plan_trip('6', 'Union Square', 'N', '34th')
plan_trip('N', 'Times Square', '6', 'Union Square')
plan_trip('N', 'Times Square', '6', 'Grand Central')
