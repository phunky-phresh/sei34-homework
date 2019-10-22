#ruby version of mta (previously done with js)
require 'pry'
require 'rainbow'

$NYC = {
  'N'=> ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
  'L'=> ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6'=> ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']
}

def one_leg(line, start, final=false)
  final = "Union Square" if !final
  stations = $NYC[line]
  start_i, final_i = stations.index(start), stations.index(final)
  backwards = start_i > final_i
  start_i, final_i = final_i, start_i if backwards
  stations = stations[start_i .. final_i]
  backwards ? stations.reverse! : stations
end

def journey(start_line, start, final_line, final)
  stops = []
  first_leg = {}
  if start_line == final_line
    first_leg = one_leg start_line, start, final
  else
    first_leg = one_leg start_line, start
    stops << one_leg(final_line, "Union Square", final)
  end
  stops.unshift first_leg
end

def validate

end

def log_journey(start_line, start, final_line, final)
  j = journey start_line, start, final_line, final
  count = 0
  puts "=" * 80
  log_leg j.size, 1, start_line, j[0]
  count += j[0].size
  if j.size > 1
    puts ""
    puts Rainbow("Change at Union Square").cyan
    log_leg j.size, 2, final_line, j[1][1..]
    count += j[1][1..].size
  end
  puts ""
  puts Rainbow("#{count} stops in total.").green
  puts ""
  puts "=" * 80
end

def log_leg(num_legs, leg_num, line, stations)
  puts ""
  puts "#{Rainbow("Leg #{leg_num}/#{num_legs}").cyan}"
  puts "Travel through these stops on the #{Rainbow(line).red.underline} line:"
  puts stations.map {|x| Rainbow(x).yellow}
end



log_journey 'N', 'Times Square', '6', 'Grand Central'
log_journey '6', 'Grand Central', 'N', 'Times Square'
log_journey 'N', 'Times Square', '6', '33rd'
log_journey '6', 'Grand Central', '6', 'Union Square'
