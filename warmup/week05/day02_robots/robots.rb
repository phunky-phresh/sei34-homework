#
# 1. generate random name
# 2. counter
# 3. reset
# 4. timer

class Robot

  def initialize
    @name = generate_name
    @instruction_counter = 0
    @created_at = Time.now.to_i
    @reset_at = Time.now.to_i
  end

  def generate_name
    letters = ("A".."Z").to_a.sample(2)
    numbers = ("000".."999").to_a.sample
    name = letters.join + numbers
  end

  #getter
  def name
    @instruction_counter += 1
    @name
  end

  def instruction_counter
    @instruction_counter
  end

  def reset
    @instruction_counter += 1
    @name = generate_name
    @reset_at = Time.now.to_i
  end

  def timers
    time_since_created = Time.now.to_i - @created_at
    time_since_last_reboot = Time.now.to_i - @reset_at
    "#{time_since_last_reboot} seconds since last reboot, #{time_since_created} seconds since creation"
  end



end


puts "=" * 20

robot1 = Robot.new
puts robot1.name
puts robot1.name

robot1.reset

puts robot1.name
puts robot1.name


puts robot1.instruction_counter

puts "=" * 20
robot2 = Robot.new
puts robot2.instruction_counter
puts robot2.name
puts robot2.name
puts robot2.instruction_counter

puts "=" * 20
robot3 = Robot.new
puts robot3.name
sleep 1
puts robot3.timers
sleep 2
puts robot3.timers
robot3.reset
puts robot3.name

sleep 3
puts robot3.timers
