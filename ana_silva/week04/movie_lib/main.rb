require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

#home page
get "/" do
  erb :home
end

#List of movies page
get "/movies" do
  @movies = query_db "SELECT * FROM movies"
  erb :movies_list
end

#new movie
get "/movies/new" do
    erb :movies_new
end

#create movie
post "/movies" do
  query = "INSERT INTO movies (title, year, cover, actors, synopsis, watched) VALUES('#{params[:title]}', #{params[:year]}, '#{params[:cover]}', '#{params[:actors]}', '#{params[:synopsis]}', '#{params[:watched]}')"
  query_db query
  redirect to('/movies')
end

#Individual movie page
get "/movies/:id" do
  @movie = query_db "SELECT * FROM movies WHERE id=#{params[:id]}"
  @movie = @movie.first
  erb :movie
end

#Edit movie
get '/movies/:id/edit' do
  @movie = query_db "SELECT * FROM movies WHERE id=#{params[:id]}"
  @movie = @movie.first
  erb :movie_edit
end

#update movie
post "/movies/:id" do
  query = "UPDATE movies SET title='#{params[:title]}', year=#{params[:year]}, cover='#{params[:cover]}', synopsis=
  '#{params[:synopsis]}', watched='#{params[:watched]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to("/movies/#{params[:id]}")
end

#delete movie
get '/movies/:id/delete' do
  query_db "DELETE FROM movies WHERE id=#{params[:id]}"
  redirect to("/movies")
end



def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
