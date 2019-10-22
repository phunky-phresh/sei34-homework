def user_input start_line, start_station, end_line, end_station
    start_line = line_assign start_line
    end_line = line_assign end_line
    start_station = start_line.index(start_station)
    end_station = end_line.index(end_station)
    if start_line == end_line
        puts "==> Start your trip <=="
        # trip =
        start_station < end_station ? (trip = start_line[start_station..end_station]) : (trip = start_line[end_station..start_station].reverse)
        puts trip.map {|station| "- #{station.capitalize}"}
        puts "==> You arrived at #{end_line[end_station]} <=="
        puts "==> Total stops: #{(start_station - end_station).abs} <=="
    else
        puts "==> Start your trip <=="
        trip = []
        start_station < start_line.index("union square") ? (trip = start_line[start_station..start_line.index("union square") - 1]) : (trip = start_line[start_line.index("union square") + 1..start_station].reverse)
        puts trip.map {|station| "-- #{station.capitalize}"}
        puts "Transfer at Union Square"
        end_station < end_line.index("union square") ? (trip = end_line[end_station..end_line.index("union square")-1].reverse) : (trip = end_line[end_line.index("union square")..end_station])
        puts trip.map {|station| "-- #{station.capitalize}"}
        puts "==> You arrived at #{end_line[end_station].capitalize} <=="
        puts "==> Total stops: #{(start_station - start_line.index("union square")).abs + (end_station - end_line.index("union square") - 1).abs} <=="
    end
    puts "==> ==================================== <=="
end

def line_assign line
    case line
    when "n"
        ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"].map!{|station| station.downcase}
    when "l"
        ["8th", "6th", "Union Square", "3rd", "1st"].map!{|station| station.downcase}
    when "6"
        ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"].map!{|station| station.downcase}
    end
end

# shorter version of the same program
# no error handling
# not as clear as the full version
# no user input

user_input "n", "times square", "n", "8th"
user_input "n", "8th", "n", "times square"
user_input "n", "times square", "6", "grand central"
user_input "l", "1st", "6", "grand central"