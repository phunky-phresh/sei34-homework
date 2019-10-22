require 'pry'

# Taking user input
def user_input 
    # defining the objects to hold trip data
    start_data = {}
    end_data = {}

    # --- Start line ------------------------------------------------
    print "What's the starting line (N/L/6): "
    start_data[:line_name] = line_input_check 
    start_data[:line] = line_assign start_data[:line_name]

    # --- Start station ---------------------------------------------
    print "What's the starting station: "
    start_data[:station_name] = station_input_check start_data[:line]
    start_data[:station] = start_data[:line].index(start_data[:station_name])

    # --- End line --------------------------------------------------
    print "What's the ending line (N/L/6): "    
    end_data[:line_name] = line_input_check 
    end_data[:line] = line_assign end_data[:line_name]

    # --- End station -----------------------------------------------
    print "What's the ending station: "
    end_data[:station_name] = station_input_check end_data[:line]
    end_data[:station] = end_data[:line].index(end_data[:station_name])

    # Combining all the info into one hash
    # Adding transfer information through the is_transfer_find method 
    # Sending the hash to a printing method
    full_trip_print is_transfer_find start_data, end_data
end

# Method that returns an array of a passed in line name
def line_assign line_name
    case line_name
    when "n"
        ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"].map!{|station| station.downcase}
    when "l"
        ["8th", "6th", "Union Square", "3rd", "1st"].map!{|station| station.downcase}
    when "6"
        ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"].map!{|station| station.downcase}
    end
end

# Method that checks if user has given a valid 
# line name that returns the name in a good format
def line_input_check
    line = gets.chomp.downcase
    while line != 'n' && line != 'l' && line != '6'
        puts "Invalid input, try again."
        print "What's the starting line (N/L/6): "
        line = gets.chomp.downcase
    end
    return line
end

# Method that checks if user has given a valid 
# station name that returns the name in a good format
def station_input_check line
    station = gets.chomp.downcase
    while !line.include?(station)
        puts "Invalid input, try again."
        print "What's the starting line (N/L/6): "
        station = gets.chomp.downcase
    end
    return station
end

# Method that combines gathered information into single hash
# Adds the necessarry info about transfer if its needed
def is_transfer_find start_data, end_data
    trip_data = {:start_data => start_data, :end_data => end_data, :transfer_data => {}}
    if start_data[:line_name] == end_data[:line_name]
        trip_data[:transfer_data][:is_transfer] = false
        return trip_data
    else
        trip_data[:transfer_data][:is_transfer] = true
        trip_data[:transfer_data][:start_transfer_index] = start_data[:line].index('union square')
        trip_data[:transfer_data][:end_transfer_index] = end_data[:line].index('union square')
        return trip_data
    end
end

# Method used to print the full trip to the consol
def full_trip_print trip_data
    if trip_data[:transfer_data][:is_transfer]
        puts "==> Start your trip <=="
        puts single_trip_print trip_data[:start_data][:station], trip_data[:transfer_data][:start_transfer_index], trip_data[:start_data][:line]
        puts "==> Transfer to line #{trip_data[:end_data][:line_name].upcase} <=="
        puts single_trip_print trip_data[:transfer_data][:end_transfer_index], trip_data[:end_data][:station], trip_data[:end_data][:line]
        puts "==> You arrived at #{trip_data[:end_data][:station_name]} <=="    
        puts "==> Total stops: #{(trip_data[:start_data][:station] - trip_data[:transfer_data][:start_transfer_index]).abs + (trip_data[:transfer_data][:end_transfer_index] - trip_data[:end_data][:station]).abs} <=="
    else
        puts "==> Start your trip <=="
        puts single_trip_print trip_data[:start_data][:station], trip_data[:end_data][:station], trip_data[:start_data][:line]
        puts "==> You arrived at #{trip_data[:end_data][:station_name]} <=="
        # binding.pry
        puts "==> Total stops: #{(trip_data[:start_data][:station] - trip_data[:end_data][:station]).abs} <=="
    end
end

# Helper method for printing trip between specified points
def single_trip_print start_index, end_index, line
    if start_index > end_index
        return line[end_index..start_index].reverse.map! {|station| "-- #{station.capitalize}"}
    else
        return line[start_index..end_index].map! {|station| "-- #{station.capitalize}"}
    end
end

user_input