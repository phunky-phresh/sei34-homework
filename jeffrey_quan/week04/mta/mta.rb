# Week 4, Day 2 - Tuesday, 22 October 2019
# Day 16

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

# def plan_trip (a, b, c, d)
#
#   subway = {
#     :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
#     :L => ["8th", "6th", "Union Square", "3rd", "1st"],
#     :S => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
#   }
#
#   start_line = a;
#   start_stop = b;
#   end_line = c;
#   end_stop = d;

def plan_trip(a, b, c, d)

  start_line = a
  start_stop = b
  end_line = c
  end_stop = d

  def plan_trip_one_line (line, start, finish)

    number_of_stops = 0

    subway = {
      :N => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
      :L => ["8th", "6th", "Union Square", "3rd", "1st"],
      :S => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }

    if subway[line].index(start) < subway[line].index(finish)
      stops = subway[line][(subway[line].index(start) + 1)..subway[line].index(finish)]
      puts "You must travel through the following stops on the #{ line } line: #{ stops.join(', ') }."
      return number_of_stops += stops.size
    elsif subway[line].index(start) > subway[line].index(finish)
      stops = subway[line][subway[line].index(finish)..(subway[line].index(start) - 1)].reverse
      puts "You must travel through the following stops on the #{ line } line: #{ stops.join(', ') }."
      return number_of_stops = +stops.size
    end
  end

  if start_line == end_line
    total_stops = plan_trip_one_line(start_line, start_stop, end_stop)
  else
    total_stops_a = plan_trip_one_line(start_line, start_stop, "Union Square")
    puts "Change at Union Square"
    total_stops_b = plan_trip_one_line(end_line, "Union Square", end_stop)
    puts "Total number of stops #{ total_stops_a + total_stops_b }."
  end
end

# plan_trip(:N, "Times Square", :N, "23rd")
plan_trip(:N, "Times Square", :S, "33rd")
