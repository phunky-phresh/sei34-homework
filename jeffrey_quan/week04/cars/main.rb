require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# home page
get '/' do
  erb :home
end

# shows lists of cars
get '/cars' do
  @cars = query_db 'SELECT * FROM cars'
  # @cars.to_s
  erb :cars_index
end

# form to add new car
get '/cars/new' do
  erb :cars_new
end

# adding new car to the cars table and showing the result in the cars page
post '/cars' do
 query = "INSERT INTO cars (model, brand, type, year, price, image) VALUES ('#{ params[:model] }', '#{ params[:brand]}', '#{ params[:type]}', '#{ params[:year]}', '#{ params[:price]}', '#{ params[:image]}')"
 query_db query
 redirect to('/cars')
end

# page for individual cars
get '/cars/:id' do
  @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }"
  @car = @car.first
  erb :cars_show
end


get '/cars/:id/edit' do
  @car = query_db "SELECT * FROM cars WHERE id=#{ params[:id] }"
  @car = @car.first
  erb :cars_edit
end

post '/cars/:id' do
  query = "UPDATE cars SET brand='#{ params[:brand] }', model='#{ params[:model] }', type='#{ params[:type] }', year='#{ params[:year] }', price='#{ params[:price] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/cars/#{ params[:id] }")
end

get '/cars/:id/delete' do
  query_db "DELETE FROM cars WHERE id='#{ params[:id] }'"
  redirect to('/cars')
end


def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
