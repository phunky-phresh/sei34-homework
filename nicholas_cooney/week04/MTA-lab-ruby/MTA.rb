
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



def trip(first, on, last, off)
  start = $mta[first].index(on)
  union1 = $mta[first].index("Union Square")
  if start > union1
    n = $mta[first][union1..start].reverse
    firstLeg = n.join(', ')
  elsif start < union1
    firstLeg = $mta[first][start..union1].join(', ')
  end

  finish = $mta[last].index(off)
  union2 = $mta[last].index("Union Square")
  reverse = $mta[last][finish..union2].reverse
  reverse.shift
  lastLeg = reverse.join(', ')
  journey = n + reverse
  length = journey.length
  p "You must travel through the following stops on the #{first}: #{firstLeg}."
  p "Change at Union Square."
  p "Your journey continues through the following stops: #{lastLeg}."
  p "#{length} stops in total."

  show_menu
  menu_choice = gets.chomp.downcase
end
#
def line
  puts "Start line: "
  $line = gets.chomp
end
def start
  puts "Start station: "
  on = gets.chomp
  result = $mta[$line].index(on)
end
def stop
  puts "Finish station: "
  off = gets.chomp
  result = $mta[$line].index(off)
end
#
  until menu_choice == "q"
    puts "you chose: #{menu_choice}"
    case menu_choice
    when "s"
      # puts "Start line: "
      # line = gets.chomp
      # puts "Start station: "
      # on = gets.chomp
      # puts "Finish station: "
      # off = gets.chomp
      # start = $mta [line].index(on)
      # stop = $mta[line].index(off)
      journey = $mta[line()][start()..stop()].join(', ')
      p "These are your stops #{journey}"
      show_menu
      menu_choice = gets.chomp.downcase
      require 'pry'
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
  else
    puts "Invalid selection, stupid."
  show_menu
  menu_choice = gets.chomp.downcase
  end
end
