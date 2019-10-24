#
# #FOR ONE LINE
#
# $N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
#
# def plan_trip (loc, des)
#
# loc_index = $N.index(loc) + 1
# des_index = $N.index(des)
#
#   if loc_index < des_index
#     p trip = $N.slice(loc_index..des_index)
#   else
#     loc_index = $N.index(loc) - 1
#
#     p trip = $N.slice(des_index..loc_index).reverse
#   end
# end
#
# plan_trip "8th", "34th"

#FOR 3 LINES
$lines = {
  N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L: ["8th", "6th", "Union Square", "3rd", "1st"],
  six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def start_index (line, start)
  $lines[line].index(start)
end

def end_index (line, des)
  $lines[line].index(des)
end

def same_line (line, start, des)
  start_index2 = start_index(line, start)
  end_index2 = end_index(line, des)

  if start_index2 < end_index2
    p trip = $lines[line].slice(start_index2 + 1..end_index2)
  elsif start_index2 > end_index2
    p trip = $lines[line].slice(end_index2..start_index2 - 1).reverse
  end
end

same_line(:N, "34th", "8th")

def plan_trip (line, start, line2, des)
  if line == line2
    puts "You must travel through the following stops on the #{line.upcase} line: #{same_line(line, start, des)}"
  else
    change_train = same_line(line, start, "Union Square")
    puts "Change at Union Square"
    cont_trip = same_line(line2, "Union Square", des)
    puts "Your journey continues through the following stops #{change_train + cont_trip}"
  end
end

#SAME LINE NORMAL ORDER
plan_trip(:N, "Times Square", :N, "23rd") #output: 34th, 28th, 23rd. 3 stops

#SAME LINE REVERSE ORDER
plan_trip(:six, "Astor Place", :six, "28th") #output: Union Square, 23rd, 28th. 3 stops

#DIFF LINE NORMAL ORDER
plan_trip(:L, "8th", :six, "Astor Place") #output: L line - 6th, Union Square. Change at Union Square. Continue 6 line - Astor Place. 3 stops

#DIFF LINE REVERSE ORDER
plan_trip(:N, "Times Square", :six, "Grand Central") #output: N line - 34th, 28th, 23rd, Union Square. Change at Union Square. Continue 6 line - 23rd, 28th, 33rd, Grand Central. 8 stops
