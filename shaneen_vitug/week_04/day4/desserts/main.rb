require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# Home
get '/' do
  erb :home
end

# Index
get '/desserts' do
  @desserts = query_db 'SELECT * FROM desserts' #Plural cos selecting all desserts
  erb :desserts_index
end

# New
get '/desserts/new' do
  erb :desserts_new
end

# Create
post '/desserts' do
  query = "INSERT INTO desserts (name, type, image) VALUES ('#{params[:name]}', '#{params[:type]}', '#{params[:image]}')"
  query_db query
  redirect to('/desserts') # GET
end

# Show
get '/desserts/:id' do
  @dessert = query_db "SELECT * FROM desserts WHERE id=#{params[:id]}" #Singular cos specific to id
  @dessert = @dessert.first
  erb :desserts_show
end

# Edit
get '/desserts/:id/edit' do
  @dessert = query_db "SELECT * FROM desserts WHERE id=#{params[:id]}"
  @dessert = @dessert.first
  erb :desserts_edit
end

# Update
post '/desserts/:id' do
  query = "UPDATE desserts SET name='#{params[:name]}', type='#{params[:type]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/desserts/#{params[:id]}") # GET request
end

# DESTROY
get '/desserts/:id/delete' do
  query_db "DELETE FROM desserts WHERE id=#{params[:id]}"
  redirect to("/desserts")
end

def query_db (sql_statement)
  puts sql_statement # Optional but nice for debugging
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results #implicitly returned
end
