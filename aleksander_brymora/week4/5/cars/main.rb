require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# Home page
get '/' do
    erb :home
end

# Page to display every car in a database
get '/cars' do
    @all_cars = query_db "SELECT * FROM cars"
    erb :all_cars
end

# Gets triggered by the form submition and adds new item to a database
post '/cars' do
    update_query = "INSERT INTO cars (name, year, photo) VALUES ('#{params[:name]}', '#{params[:number]}', '#{params[:image]}')"
    query_db update_query
    redirect to('/cars')
end

# Display a page to add a new car
get '/cars/new' do
    erb :add_new
end

# Display certain car
get '/cars/:id' do
    @car = query_db "SELECT * FROM cars WHERE id=#{params[:id]}"
    @car = @car.first
    erb :car_show
end

# Delete a car from the database
get '/cars/:id/delete' do
    query_db "DELETE FROM cars WHERE id='#{params[:id]}'"
    redirect to ("/cars")
end

# Edit a car in the database
get '/cars/:id/edit' do
    @car_to_edit = query_db "SELECT * FROM cars WHERE id=#{params[:id]}"
    @car_to_edit = @car_to_edit.first
    erb :car_edit
end

post '/cars/:id' do
    query_db "UPDATE cars SET name='#{params[:name]}', year='#{params[:year]}', photo='#{params[:image]}' WHERE id=#{params[:id]}"
    redirect to("/cars/#{params[:id]}")
end

# Method used to ask the database a passed in question
def query_db statement
    puts statement
    db = SQLite3::Database.new 'cars.sqlite3'
    db.results_as_hash = true
    results = db.execute statement
    db.close
    results
end