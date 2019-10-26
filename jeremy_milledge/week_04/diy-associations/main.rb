require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'


# SETUP ########################################################################
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)
#logger in terminal
ActiveRecord::Base.logger = Logger.new(STDERR);

#model
class Link < ActiveRecord::Base
  belongs_to :idea, :optional => true
end

class Idea < ActiveRecord::Base
  has_many :links
end

# IDEAS #######################################################################

# add new
post '/' do
  i = Idea.new
  i.title = params[:title]
  i.category = params[:category]
  i.description = params[:description]
  i.save
  redirect to("/idea/#{i.id}")
end

get '/idea/new' do
  erb :new_idea
end

# viewing idea single page
get '/idea/:id' do |id|
  @idea = Idea.find id
  @date = @idea.post_time.httpdate[0..15]
  erb :idea
end

# edit idea
get '/idea/:id/edit' do |id|
  @idea = Idea.find id
  erb :edit_idea
end

post '/idea/:id' do
  i = Idea.find params[:id]
  i.title = params[:title]
  i.category = params[:category]
  i.description = params[:description]

  i.save
  redirect to ("/idea/#{params[:id]}") #after posting, do get request
end

# delete idea
get '/idea/:id/delete_check' do |id| #check before delete
  @idea = Idea.find id
  erb :delete_idea
end
get '/idea/:id/delete' do |id| #final
  i = Idea.find id
  i.destroy
  redirect to ('/')
end

# view all ideas (homepage)
get '/' do
  @ideas = Idea.all.shuffle
  @dates = @ideas.map {|t| t.post_time.httpdate[0..15]}
  # binding.pry
  erb :home
end


# LINKS ########################################################################

# create link
post '/link' do
  a = Link.new
  a.name = params[:name]
  a.url = params[:url]
  a.idea_id = params[:idea_id]
  a.save
  redirect to("/idea/#{params[:idea_id]}")
end

get '/link/new/related-to/:idea_id' do |idea_id|
  @idea = Idea.find idea_id
  erb :new_link
end

#edit link
get '/link/:id/edit/related-to/:idea_id' do |id, idea_id|
  @link = Link.find id
  @idea = Idea.find idea_id
  erb :edit_link
end

post '/link/:id' do
  a = Link.find params[:id]
  a.name = params[:name]
  a.url = params[:url]
  a.idea_id = params[:idea_id]
  a.save
  redirect to ("/idea/#{params[:idea_id]}")
end

# delete link
get '/link/:id/delete/related-to/:idea_id' do |id, idea_id|
  a = Link.find id
  a.destroy
  redirect to ("/idea/#{idea_id}") #
end

# CATEGORIES ###################################################################
get '/category/:cat' do |cat|
  @category = cat
  @ideas = Idea.all.select {|c| c.category == cat}
  @dates = @ideas.map {|t| t.post_time.httpdate[0..15]}
  # binding.pry
  erb :category
end

# GLOBAL ######################################################################
def get_cats
  Idea.all.map {|c| c.category}.uniq
end

after do
  ActiveRecord::Base.connection.close
end
