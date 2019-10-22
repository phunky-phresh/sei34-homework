$lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}

p $lines
puts
puts

def leg line, start_station, end_station
    # takes input of stations, outputs sub-array travelling lines

    # find start and end station index 
    start_index = $lines[line].find_index start_station
    end_index = $lines[line].find_index end_station
    
    if end_index > start_index 
        return $lines[line][start_index + 1, end_index - start_index]
    else
        return $lines[line][end_index, start_index - end_index].reverse
    end
        
end

def trip start_line, start_station, end_line, end_station 
    if start_line == end_line 
        output = leg start_line, start_station, end_station
        puts "You must travel through the following stops on the #{start_line} line: #{output}"
        puts "There are #{output.size} stops in total."
    else
        leg1 = leg start_line, start_station, "Union Square"
        leg2 = leg end_line, "Union Square", end_station 
        puts "You must travel through the following stops on the #{start_line} line: #{leg1}"
        puts "Change at Union Square"
        puts "Your journey continues through the following stops on the #{end_line} line: #{leg2}"
        puts "There are #{leg1.size + leg2.size} stops in total."

    end
    puts
    puts
end 


# tests 
puts '"N", "34th", "L", "8th"'
trip "N", "34th", "L", "8th"

puts '"6", "Astor Place", "N", "Times Square"'
trip "6", "Astor Place", "N", "Times Square"

puts '"6", "33rd", "L", "1st"'
trip "6", "33rd", "L", "1st"

puts '"N", "34th", "N", "Union Square"'
trip "N", "34th", "N", "Union Square"

puts '"6", "Astor Place", "6", "33rd"'
trip "6", "Astor Place", "6", "33rd"
