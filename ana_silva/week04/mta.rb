require "pry"

# MTA Lab
#
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
#
# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."




TRAINLINES = {
    'N' => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    'L' => ["8th", "6th", "Union Square", "3rd", "1st"],
    '6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

p TRAINLINES
puts ""

#Function to find index of station
def get_st_index(station, line)
  TRAINLINES[line].index(station)
end

#Function to find route in one line from initial st to final st
def line_route(ini_st, fin_st, line)
  ini_st_index = get_st_index(ini_st, line)
  fin_st_index = get_st_index(fin_st, line)
  if ini_st_index < fin_st_index
    TRAINLINES[line][ini_st_index+1..fin_st_index]
  else
    TRAINLINES[line][fin_st_index...ini_st_index].reverse
  end
end

#function to plan trip
def plan_trip(ini_line, ini_st, fin_line, fin_st)
  puts "From #{ini_line}-#{ini_st} to #{fin_line}-#{fin_st}:"
  #if on same line
  if ini_line == fin_line
    trip_route = line_route(ini_st, fin_st, ini_line)
    puts "You must travel through the following stops on the #{ini_line} line: #{trip_route.join(", ")}."
    #if need to change line
  elsif ini_st != "Union Square" && fin_st != "Union Square"
    trip_route1 = line_route(ini_st, "Union Square", ini_line)
    trip_route2 = line_route("Union Square", fin_st, fin_line)
    trip_route = trip_route1 + trip_route2
    puts "You must travel through the following stops on the #{ini_line} line: #{trip_route1.join(", ")}."
    puts "Change at Union Square to the #{fin_line} line."
    puts "Your journey continues through the following stops: #{trip_route2.join(", ")}."
  #if diff lines but starting at US
  elsif ini_st == "Union Square"
    puts "Change to the #{fin_line} line."
    trip_route = line_route("Union Square", fin_st, fin_line)
    puts "Your journey continues through the following stops: #{trip_route.join(", ")}."
  #if diff lines but ending at US
  elsif fin_st == "Union Square"
    trip_route = line_route(ini_st, "Union Square", ini_line)
    puts "You must travel through the following stops on the #{ini_line} line: #{trip_route.join(", ")}."
    puts "At Union Square, change to the #{fin_line} line."
  end
  puts "#{trip_route.size} stops in total." #Defines total of stops
end


plan_trip("N", "Times Square", "N", "23rd")   #same line
plan_trip("6", "Union Square", "6", "Grand Central")   #same line reverse
plan_trip("N", "Times Square", "6", "33rd")
plan_trip("N", "34th", "6", "Union Square")
plan_trip("L", "8th", "L", "3rd")
plan_trip("N", "Times Square", "6", "Astor Place")
plan_trip("N", "Union Square", "6", "Grand Central")
plan_trip("L", "1st", "6", "Grand Central")
