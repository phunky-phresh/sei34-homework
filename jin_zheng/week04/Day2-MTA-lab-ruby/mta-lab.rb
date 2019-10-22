# MTA Lab
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."

# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

def plan_trip(line_on, stop_on, line_off, stop_off)

    # Variable preparation _____________________________________________________
    lines = {
        "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
        "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
        "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    }
    ln1, ln2 = lines[line_on], lines[line_off]
    ln1 = ln2 if stop_on == "Union Square"
    ln2 = ln1 if stop_off == "Union Square"
    index_on, index_off = ln1.index(stop_on), ln2.index(stop_off)

    # Actions __________________________________________________________________
    # # Assumption: Input validation is guarded by user interface.
    # # e.g. Users cannot choose to get on and get off on the same station.
    get_trip = -> line, index1, index2 {
        index1 < index2 ? trip = line[index1+1..index2] : trip = line[index2..index1-1].reverse
    }

    if ln1 == ln2
        trip1 = get_trip.(ln1, index_on, index_off)
    else
        trip1 = get_trip.(ln1, index_on, ln1.index("Union Square"))
        trip2 = get_trip.(ln2, ln2.index("Union Square"), index_off)
    end

    trip2 ? total = (trip1 + trip2).length : total = trip1.length

    # Printing and formatting __________________________________________________
    puts "*" * 80
    puts 'Trip Planner'.center(80)
    puts "=-" * 40
    puts "You must travel through the following stops on the #{line_on} line: #{trip1}"
    puts "Change at Union Square. \nYour journey continues through the following stops: #{trip2}" if ln1 != ln2
    puts "#{total} stops in total."
    puts "*" * 80
    puts " " * 80
end


plan_trip("N", "Times Square", "N", "Union Square")
plan_trip("N", "Union Square", "N", "Times Square")
plan_trip("N", "8th", "6", "Grand Central")
plan_trip("L", "8th", "6", "Grand Central")
plan_trip("L", "Union Square", "6", "Astor Place")
plan_trip("N", "Times Square", "L", "Union Square")
