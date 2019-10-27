def mortgage_calc l, c, n
    # P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    c = c * 0.01 / 12;
    (l * (c * ((1 + c) ** n)))/(((1 + c) ** n) - 1)
end

def interface
    puts "-="*20
    puts "Monthly mortgage payment calculator"
    puts "-="*20
    print "What's your loan amount: "
    l = gets.to_f
    print "What's the interest (in %): "
    c = gets.to_f
    print "What's the number of mortgage payments: "
    n = gets.to_i
    puts "Monthly payment is $#{mortgage_calc l, c, n}"
end

interface