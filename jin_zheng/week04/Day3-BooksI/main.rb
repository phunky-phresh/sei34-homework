require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get "/" do

    mars = ['Mars', 'Marte', '%E7%81%AB%E6%98%9F', '%ED%99%94%EC%84%B1']
    begin
        li = mars.map{|word| HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{word}")['items'][0,10]}.inject &:|;
        while true
            book = li.shuffle[0]
            break if book["volumeInfo"]["description"].length > 20
        end
    rescue
        li = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:jaws")['items']
        book = li[0]
    end

        @title = book["volumeInfo"]["title"]
        @author = book["volumeInfo"]["authors"][0]
        @cover = book["volumeInfo"]["imageLinks"]["thumbnail"]
        @description = book["volumeInfo"]["description"]
        @catagory = book["volumeInfo"]["categories"][0]


    erb :home
end


get "/search" do
    title = params[:book_name]
    bookinfo = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{title}")['items'][0]["volumeInfo"]
    @title = bookinfo["title"]
    @author = bookinfo["author"]
    @cover = bookinfo["imageLinks"]["thumbnail"]
    @description = bookinfo["description"]
    @catagory = bookinfo["categories"][0]

    erb :home

end
