require 'rainbow'

$NYC = {
  'N'=> ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
  'L'=> ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6'=> ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']
}

class Trip
  attr_accessor :start_line, :start, :final_line, :final, :legs, :num_legs, :num_stops
  @@count = 0

  def initialize(start_line, start, final_line, final)
    @start_line = start_line
    @start = start
    @final_line = final_line
    @final = final
    @legs =  validate(@start_line, @start, @final_line, @final)
    @num_legs = @legs.size
    @num_stops = @legs.flatten.count
    @@count += 1
  end

  def self.count
    @@count
  end

  def print_journey
    puts "  |  " * 16, "‾" * 80
    print_leg @num_legs, 1, @start_line, @legs[0]
    if @num_legs > 1
      puts Rainbow("Change at Union Square").cyan
      print_leg @num_legs, 2, @final_line, @legs[1]
    end
    puts Rainbow("#{@num_stops} stops in total.").green
    puts "_" * 80
  end
end

# helper methods
def validate(start_line, start, final_line, final)
  if (start == 'Union Square' && final == 'Union Square') || (start == final && start_line == final_line)
    raise NameError, "You are already at the right place."
  elsif !$NYC.keys.include?(start_line) || !$NYC.keys.include?(final_line)
    raise KeyError, "Invalid line input."
  else
    if (final_line != final_line && (start == 'Union Square' || final == 'Union Square'))
      start == 'Union Square' ? start_line = final_line : final_line = start_line;
    end
    if !$NYC[start_line].include?(start) || !$NYC[final_line].include?(final)
      raise NameError, "Station not on this line."
    else
      journey start_line, start, final_line, final
    end
  end
end

def journey(start_line, start, final_line, final)
  stops = []
  if start_line == final_line
    stops << one_leg(start_line, start, final)
  else
    stops << one_leg(start_line, start)
    stops << one_leg(final_line, "Union Square", final)[1..]
  end
end

def one_leg(line, start, final=false)
  final = "Union Square" if !final
  stations = $NYC[line]
  start_i, final_i = stations.index(start), stations.index(final)
  backwards = start_i > final_i
  start_i, final_i = final_i, start_i if backwards
  stations = stations[start_i .. final_i]
  backwards ? stations.reverse! : stations
end

def print_leg(num_legs, leg_num, line, stations)
  print "#{Rainbow("Leg #{leg_num}/#{num_legs}").cyan}: "
  puts "Travel through these stops on the #{Rainbow(line).red.underline} line:"
  puts stations.map {|x| "\t#{Rainbow(x).yellow}"}
end

tests = [
  ['N', 'Times Square', '6', 'Grand Central'],
  ['N', 'Times Square', '6', '33rd'],
  ['6', 'Grand Central', '6', 'Union Square'],
  # ['Q', 'Grand Central', '6', 'Union Square'], #invalid line
  # ['6', 'Grand', '6', 'Union Square'], # invalid station name
  # ['6', 'Union Square', '6', 'Union Square'] #same station
]

testDB = tests.map {|x| Trip.new *x}
testDB.each {|x| x.print_journey}
puts "#{Trip.count} trips recorded."
