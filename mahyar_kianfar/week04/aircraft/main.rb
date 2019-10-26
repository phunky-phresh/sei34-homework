require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end
# INDEX
get '/fighters' do
  @fighters = query_db 'SELECT * FROM Fighters'
  erb :fighters_index
end

# NEW
get '/fighters/new' do
  erb :fighters_new
end


# CREATE
post '/fighters' do
  query = "INSERT INTO Fighters (name, model,generation, image) VALUES('#{ params[:name] }', '#{ params[:model] }','#{ params[:generation] }', '#{ params[:image] }')"

  query_db query
  redirect to('/fighters') # GET request
end


#show
get '/fighters/:id' do
@fighter = query_db "SELECT * FROM Fighters WHERE id=#{ params[:id] }"
@fighter = @fighter.first
erb :fighters_show
end


# EDIT
get '/fighters/:id/edit' do
  @fighter = query_db "SELECT * FROM Fighters WHERE id=#{ params[:id] }"
  @fighter = @fighter.first
  erb :fighters_edit
end

# UPDATE
post '/fighters/:id' do
  query = "UPDATE fighters SET name='#{ params[:name] }', model='#{ params[:model] }',generation='#{ params[:generation] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  query_db query
  redirect to("/fighters/#{ params[:id] }") # GET request
end

get 'fighters/:id/delete' do

  
  end


def query_db(sql_statement)
  puts sql_statement 
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results 
end


