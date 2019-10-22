require 'pry'
# TODO make the train lines a visible menu on terminal

  $mta = {
    "lineN" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "lineL" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "line6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

def show_menu
  puts "-=" * 40 # budget horizontal dividing line
  puts "MTA" # TODO: you could use .center here to make it look better
  puts "-=" * 40 # budget horizontal dividing line
  puts "[s] - Single line Journey"
  puts "[m] - Multi line Journey"
  puts "[q] - quit MTA"

  # TOTO: Add other options here
  print "Enter your choice: "
end
show_menu
menu_choice = gets.chomp.downcase

# start = trainLines[:lineN].index("34th")
# stop = trainLines[:lineN].index("8th")
#
# journey = trainLines[:lineN][start..stop].join(', ')
#
# p "these are your stops #{journey}"

# create a method that takes parameters for start and finish
def trip(first, on, last, off)
  start = $mta[first].index(on)
  union1 = $mta[first].index("Union Square")
  if start > union1
    n = $mta[first][union1..start].reverse
    firstLeg = n.join(', ')
  elsif start < union1
    firstLeg = $mta[first][start..union1].join(', ')
  end
  # binding.pry

  finish = $mta[last].index(off)
  union2 = $mta[last].index("Union Square")
  # if finish > union2
  reverse = $mta[last][finish..union2].reverse
  reverse.shift
  lastLeg = reverse.join(', ')
  p "#{firstLeg + ', ' + lastLeg}"
  show_menu
  menu_choice = gets.chomp.downcase
end

until menu_choice == "q"
  puts "you chose: #{menu_choice}"
  case menu_choice
when "s"
  puts "Start line: "
  line = gets.chomp
  puts "Start station: "
  on = gets.chomp
  puts "Finish station: "
  off = gets.chomp
  start = $mta[line].index(on)
  stop = $mta[line].index(off)
  journey = $mta[line][start..stop].join(', ')
  p "These are your stops #{journey}"
  show_menu
  menu_choice = gets.chomp.downcase
when "m"
  puts "Start line: "
  first = gets.chomp
  puts "Start station: "
  on = gets.chomp
  puts "Finish line: "
  last = gets.chomp
  puts "Finish station: "
  off = gets.chomp
  p "#{trip(first, on, last, off)}"

end
end
# trip(:lineN, "8th", :line6, "33rd")
# trip(:lineL, "3rd", :lineN, "Times Square")
# trip(:line6, "Grand Central", :lineL, "8th")
# binding.pry
# # log the index of start and finish
#change at union Square
# print stops
