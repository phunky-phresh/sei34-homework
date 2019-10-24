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

get '/spoons/new' do
  erb :spoons_new

end
post '/spoons' do
  query = "INSERT INTO spoons (name, description, rating, image) VALUES ('#{params[:name]}', '#{params[:description]}', '#{params[:rating]}', '#{params[:image]}')"
  query_db query
  redirect to ('/spoons')
end
#SHOW
get '/spoons/:id' do
  @spoons = query_db "SELECT * FROM spoons WHERE id=#{params[:id]}"
  @spoons = @spoons.first
  @spoons.to_s

  erb :spoons_display
end
###EDIT ####
get '/spoons/:id/edit' do
  @spoons = query_db "SELECT * FROM spoons WHERE id=#{params[:id]}"
  @spoons = @spoons.first
  erb :spoons_edit
end
###UPDATE###
post '/spoons/:id' do
  query = "UPDATE spoons SET name='#{params[:name]}', description='#{params[:description]}', rating='#{params[:rating]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to ("/spoons/#{params[:id]}")
end

#DELETE###
get '/spoons/:id/delete' do
  query_db "DELETE FROM spoons WHERE id=#{params[:id]}"
  redirect to ("/spoons")
end

def query_db sql_statement
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
