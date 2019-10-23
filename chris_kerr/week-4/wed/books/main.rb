require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
    erb :home
end

get '/results' do
    @book = params[:input_book]
    
    begin 
        book_info = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book }"
    rescue
        redirect to '/'
    end

    @book_des = book_info["items"].first['volumeInfo']['description']
    @thumbnail = book_info["items"].first['volumeInfo']['imageLinks']['thumbnail']

    erb :results
end

