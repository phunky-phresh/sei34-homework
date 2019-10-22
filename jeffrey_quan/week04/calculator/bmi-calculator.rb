# Week 4, Day 1 - Monday, 21 October 2019
# Day 15

# Bonus

# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

print "Height (in cm): "
height = gets.to_f
print "Weight (in kg): "
weight = gets.to_f

bmi = (weight / ((height/100)**2))
puts "Your BMI is: #{ '%.1f' % bmi } kg/m2."
