require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# INDEX - Page - listing out all surfboards
get '/surfboards' do
  "Hello World"
  @surfboards = query_db 'SELECT * FROM surfboards'
  erb :surfboards_index
end

# NEW - Page - Form submit of new board
get '/surfboards/new' do
  erb :surfboards_new
end

# CREATE - method=post - posting data from the /butterflies/new page
post '/surfboards' do
  query = "INSERT INTO surfboards (name, brand, type, image) VALUES ('#{ params[:name] }', '#{ params[:brand] }', '#{ params[:type] }', '#{ params[:image] }')"
  query_db query
  redirect to('/surfboards') # GET request
end

# SHOW or POST
get '/surfboards/:id' do
  # get the surfboard from the database
  @surfboard = query_db "SELECT * FROM surfboards WHERE id=#{ params[:id] }"
  @surfboard = @surfboard.first # Extract the single surfboard from the array.
  # render a view - use erb to get
  erb :surfboards_show
end

# EDIT
get '/surfboards/:name/edit' do
  @surfboard = query_db "SELECT * FROM surfboards WHERE name='#{ params[:name] }'"
  @surfboard = @surfboard.first
  erb :surfboards_edit
end

# UPDATE
post '/surfboards/:id' do
  query = "UPDATE surfboards SET name='#{ params[:name] }', brand='#{ params[:brand] }', type='#{ params[:type] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to ("/surfboards/#{ params[:id] }") # GET request
end

# DESTROY
get '/surfboards/:id/delete' do
  query_db "DELETE FROM surfboards WHERE id=#{ params[:id] }"
  redirect to("/surfboards")
end



# Function to connect to the database
def query_db(sql_statement)
  puts sql_statement # optional, helps with debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results # implicitly returned
end
