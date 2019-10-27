require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def parse_idea(idea)
  parsed = idea
  parsed["links"] = parsed["links"].split(',') #split our csvs
  parsed["links"].map! {|y| y[0..3] == 'http' ? y : 'http://' + y} #prepend http if not existing
  t = parsed["post_time"]
  parsed["post_time"] = "#{t[8..9]}/#{t[5..6]}/#{t[0..3]}" #basic date formatting
  parsed["title"].upcase! #because all ideas are exciting
  parsed
end


#create
post '/' do
  query = "INSERT INTO entrepreneuring (title, category, description, links) VALUES ('#{params[:title]}', '#{params[:category]}', '#{params[:description]}', '#{params[:links]}')"
  query_db query
  redirect to('/')
end

get '/new' do
  erb :new
end

#single page
get '/idea/:id' do
  @idea = query_db "SELECT * FROM entrepreneuring WHERE id=#{params["id"]}"
  @idea = parse_idea(@idea.first)
  erb :idea
end

#edit
get '/idea/:id/edit' do |id|
  @idea = query_db "SELECT * FROM entrepreneuring WHERE id=#{params["id"]}"
  @idea = parse_idea(@idea.first)
  erb :edit
end

post '/idea/:id' do
  query = "UPDATE entrepreneuring SET title='#{params[:title]}', category='#{params[:category]}', description='#{params[:description]}', links='#{params[:links]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to ("/idea/#{params[:id]}") #after posting, do get request
end

#delete
get '/idea/:id/delete' do |id|
  query_db "DELETE FROM entrepreneuring WHERE id=#{id}"
  redirect to ('/')
end

#view
get '/' do
  @ideas = query_db 'SELECT * FROM entrepreneuring'
  @ideas.each {|x| parse_idea(x)}
  erb :home
end

def query_db(sql_statement)
  p sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  res = db.execute sql_statement
  db.close
  res
end
