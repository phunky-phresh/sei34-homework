require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
    get_data
    @plant_last = @plants.last

    erb :home
end

get '/new_plant' do
    get_data
    erb :new_plant
end

post '/show_plant' do
    get_data
    query = "INSERT INTO houseplants (name, type, water_demand, sunlight_demand, rareness, image) VALUES ('#{ params[:name].capitalize}','#{params[:type]}','#{params[:water_demand]}','#{params[:sunlight_demand]}','#{params[:rareness]}','#{params[:image]}')"
    query_db query, true
    redirect to("/")
end

get '/:type/:id' do
    get_data
    @plant = query_db "SELECT * FROM houseplants WHERE id=#{ params[:id] }", true
    @plant = @plant.first

    erb :show_plant
end


post '/:type/:id/edit' do
    query = "UPDATE houseplants SET name='#{params[:name]}', type='#{params[:type]}', water_demand='#{params[:water_demand]}', sunlight_demand='#{params[:sunlight_demand]}', rareness='#{params[:rareness]}', image = '#{params[:image]}' WHERE id='#{params[:id]}'"
    query_db query, true
    redirect to ("/#{params[:type]}/#{params[:id]}")
end

get '/:type/:id/delete' do
    query_db "DELETE FROM houseplants WHERE id=#{ params[:id]}", true
    redirect to("/")
end


get '/:type' do
    redirect to("https://www.google.com/search?sxsrf=ACYBGNSZtrWdHYi8gm6aSsl3P3eZTNoOdw%3A1571907762619&source=hp&ei=smixXePkItC7rQHjp5OICA&q=#{params[:type]}&oq=phi&gs_l=psy-ab.3.0.35i39l2j0i67l6j0i131j0i67.2013.2395..3814...0.0..0.207.694.0j3j1......0....1..gws-wiz.....10..35i362i39j0.Ke9en7YfNYI")
end

def query_db(sql_statement, to_hash)
    puts sql_statement
    db = SQLite3::Database.new 'database.sqlite3'
    db.results_as_hash = to_hash
    results = db.execute sql_statement
    db.close
    results
end

def get_data()
    @plants = query_db 'SELECT * FROM houseplants', true
    @types = query_db 'SELECT DISTINCT type FROM houseplants', false
    @types.flatten!
end
