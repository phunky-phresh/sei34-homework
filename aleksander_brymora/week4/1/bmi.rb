def bmi_calc weight, height
    weight / (height*height)
end

print "Input your weight: "
weight = gets.to_f
print "Input your height: "
height = gets.to_f
puts "Your BMI is: #{bmi_calc weight, height}"