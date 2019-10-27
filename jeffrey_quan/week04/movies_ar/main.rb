require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Actor < ActiveRecord::Base
  has_and_belongs_to_many :movies, :optional => true
end

class Movie < ActiveRecord::Base
  belongs_to :director, :optional => true
  has_and_belongs_to_many :actors, :optional => true
end

class Director < ActiveRecord::Base
  has_many :movies
end

## don't know if this is needed
# class CreateActorsMoviesJoinTable < ActiveRecord::Migration[5.0]
#   def change
#     create_join_table :actors, :movies do |t|
#       t.index :actor_id
#       t.index :movie_id
#     end
#   end
# end

get 'pry' do
  binding.pry
end

get '/' do
  erb :home
end

## MOVIES
# Show movies
get '/movies' do
  @movies = Movie.all
  erb :movies_index
end

# Add movie
get '/movies/new' do
  erb :movies_new
end

# Show specific movie
get '/movies/:id' do
  @movie = Movie.find params[:id]
  erb :movies_show
end

# Create movie
post '/movies' do
  movie = Movie.new
  movie.name = params[:name]
  movie.year = params[:year]
  movie.genre = params[:genre]
  movie.image = params[:image]
  movie.director_id = params[:director_id]
  movie.save
  redirect to("/movies/#{ movie.id }")
end

# Edit movie
get '/movies/:id/edit' do
  @movie = Movie.find params[:id]
  erb :movies_edit
end

# Update movie
post '/movies/:id' do
  movie = Movie.find params[:id]
  movie.name = params[:name]
  movie.year = params[:year]
  movie.genre = params[:genre]
  movie.image = params[:image]
  movie.director_id = params[:director_id]
  movie.save
  redirect to("/movies/#{ movie.id }")
end

# Delete movie
get '/movies/:id/delete' do
  movie = Movie.find params[:id]
  movie.destroy
  redirect to("/movies")
end

## DIRECTORS
# Show directors
get '/directors' do
  @directors = Director.all
  erb :directors_index
end

# Add director
get '/directors/new' do
  erb :directors_new
end

# Show specific director
get '/directors/:id' do
  @director = Director.find params[:id]
  erb :directors_show
end

# Create new director
post '/directors' do
  director = Director.new
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to("/directors/#{ director.id }")
end

# Edit director
get '/directors/:id/edit' do
  @director = Director.find params[:id]
  erb :directors_edit
end

# Update director
post '/directors/:id' do
  director = Director.find params[:id]
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to("/directors/#{ director.id }")
end

# Delete director
get '/directors/:id/delete' do
  director = Director.find params[:id]
  director.destroy
  redirect to("/directors")
end

## ACTORS
# Show actors
get '/actors' do
  @actors = Actor.all
  erb :actors_index
end

# Add actor
get '/actors/new' do
  erb :actors_new
end

# Show specific actor
get '/actors/:id' do
  @actor = Actor.find params[:id]
  erb :actors_show
end

# Create actor
post '/actors' do
  actor = Actor.new
  actor.name = params[:name]
  actor.image = params[:image]
  actor.save
  redirect to("/actors/#{ actor.id }")
end

# Edit actor
get '/actors/:id/edit' do
  @actor = Actor.find params[:id]
  erb :actors_edit
end

# Update actor
post '/actors/:id' do
  actor = Actor.find params[:id]
  actor.name = params[:name]
  actor.image = params[:image]
  actor.save
  redirect to("/actors/#{ params[:id] }")
end

# Delete actor
get '/actors/:id/delete' do
  actor = Actor.find params[:id]
  actor.destroy
  redirect to("/actors")
end

# Add actor to movie
get '/movies/:id/add-actor' do
  @movie = Movie.find params[:id]
  erb :movies_add_actor
end

post '/movies/:id/add-actor' do
  movie = Movie.find params[:id]
  actor = Actor.where( :id => params[:actor_id] )
  movie.actors << actor
  movie.save
  redirect to("/movies/#{ params[:id] }")
end

after do
  ActiveRecord::Base.connection.close
end
