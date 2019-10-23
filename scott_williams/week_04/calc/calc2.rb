# Calculator

# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations
# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu
#
# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#
#
#
# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour

require 'pry'

puts "What is your amount borrowed: "
loan_amount = gets.to_f

puts "What is your estimate interest rate: "
int_rate = gets.to_f
int_rate = int_rate / 12

puts "What is your length of loan in years: "
loan_years = gets.to_f
monthly_payments = loan_years * 12

# calculators
def loan(loan, int, mth)
  loan * int * ((1 + int)**mth) / ( (1 + int)**mth - 1 )
  # loan * 2
  # int * (1 + int)**mth / (1 + int)
end

puts "Your monthly repayments will be: $#{ loan(loan_amount, int_rate, monthly_payments).round(2) }"

# binding.pry # like the JS debugger
