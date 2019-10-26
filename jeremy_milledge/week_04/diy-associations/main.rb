require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'


#setup
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#logger
ActiveRecord::Base.logger = Logger.new(STDERR);

#model
class Link < ActiveRecord::Base
  belongs_to :idea, :optional => true
end

class Idea < ActiveRecord::Base
  has_many :links
end

#create
post '/' do
  # query = "INSERT INTO entrepreneuring (title, category, description, links) VALUES ('#{params[:title]}', '#{params[:category]}', '#{params[:description]}', '#{params[:links]}')"
  # query_db query
  i = Idea.new
  i.title = params[:title]
  i.category = params[:category]
  i.description = params[:description]
  i.save
  redirect to('/')
end

get '/new_idea' do
  erb :new_idea
end

#single page
get '/idea/:id' do |id|
  @idea = Idea.find id
  # @idea = parse_idea(@idea.first)
  erb :idea
end

#edit
get '/idea/:id/edit' do |id|
  @idea = Idea.find id
  # @idea = parse_idea(@idea.first)
  erb :edit_idea
end

post '/idea/:id' do
  # query = "UPDATE entrepreneuring SET title='#{params[:title]}', category='#{params[:category]}', description='#{params[:description]}', links='#{params[:links]}' WHERE id=#{params[:id]}"
  # query_db query

  i = Idea.find params[:id]
  i.title = params[:title]
  i.category = params[:category]
  i.description = params[:description]
  i.save
  redirect to ("/idea/#{params[:id]}") #after posting, do get request
end

#delete
get '/idea/:id/delete' do |id|
  # query_db "DELETE FROM entrepreneuring WHERE id=#{id}"
  i = Idea.find id
  i.destroy
  redirect to ('/')
end

#view
get '/' do
  @ideas = Idea.all

  erb :home
end


#methods
def parse_idea(idea)
  parsed = idea
  # parsed["links"] = parsed["links"].split(',') #split our csvs
  # parsed["links"].map! {|y| y[0..3] == 'http' ? y : 'http://' + y} #prepend http if not existing
  t = parsed.post_time
  parsed.post_time = "#{t[8..9]}/#{t[5..6]}/#{t[0..3]}" #basic date formatting
  parsed.title.upcase! #because all ideas are exciting
  parsed
end

def query_db(sql_statement)
  p sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  res = db.execute sql_statement
  db.close
  res
end

after do
  ActiveRecord::Base.connection.close
end
