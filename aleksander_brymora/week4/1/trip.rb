def trip_cost distance, m_per_g, p_per_g
    (distance / m_per_g) * p_per_g
end

def trip_time distance, speed
    distance / speed
end

print "Input the distance: "
distance = gets.to_f
print "Input miles per galon: "
m_per_g = gets.to_f
print "Input price per galon: "
p_per_g = gets.to_f
print "Input the speed in miles per hour: "
speed = gets.to_f

puts "You will pay $#{trip_cost distance, m_per_g, p_per_g} and will drive for #{trip_time distance, speed}h"

