require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    @list = query_db "SELECT * FROM kit"
    @option_list = []
    @list.each do | hash | 
        @option_list << hash["sport"]
    end
    @option_list.uniq!

    erb :home
end

get '/items/new' do
    erb :add
end

post '/' do
    query_db "INSERT INTO kit (item, sport, quantity, image) VALUES ('#{params["item"]}', '#{params["sport"]}', '#{params["quantity"]}', '#{params['image']}')"
    redirect to '/'
end

get '/items/:id/edit' do
    @item = query_db "SELECT * FROM kit WHERE id='#{params[:id]}'"
    @item = @item.first
    erb :edit
end

post '/items/:id' do
    query_db "UPDATE kit SET item='#{params['item']}', sport='#{params['sport']}', quantity='#{params['quantity']}', image='#{params['image']}' WHERE id=#{params[:id]}"
    redirect to "/items/#{params[:id]}"
end

get '/items/:id/delete' do
    query_db "DELETE FROM kit WHERE id=#{params[:id]}"
    redirect to '/'
end

get '/items/:id' do
    @item = query_db "SELECT * FROM kit WHERE id='#{params[:id]}'"
    @item = @item.first
    erb :item_page
end

get '/:sport' do 
    @list = query_db "SELECT * FROM kit WHERE sport='#{params[:sport]}'"
    @full_list = query_db "SELECT * FROM kit"
    @option_list = []
    @full_list.each do | hash | 
        @option_list << hash["sport"]
    end
    @option_list.uniq!
    erb :home
end



# database interaction function 
def query_db sql_input
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = true
    output = db.execute sql_input
    db.close
    output
end
