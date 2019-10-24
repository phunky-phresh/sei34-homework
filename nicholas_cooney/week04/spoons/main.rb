require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/spoons' do
  @spoons = query_db "SELECT * FROM spoons"
  puts @spoons.to_s
  erb :spoons_index
end

#SHOW
get '/spoons/:id' do
  @spoons = query_db "SELECT * FROM spoons WHERE id=#{params[:id]}"
  @spoons = @spoons.first
  @spoons.to_s

  erb :spoons_display
end


get '/spoons/new' do
  erb :spoons_new
end

post '/spoons' do
  query = "INSERT INTO spoons (name, description, rating, image) VALUES ('#{params[:name]}', '#{params[:description]}', '#{params[:rating]}', '#{params[:image]}')"
  query_db query_db
  redirect to ('/spoons')
end

def query_db sql_statement
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
