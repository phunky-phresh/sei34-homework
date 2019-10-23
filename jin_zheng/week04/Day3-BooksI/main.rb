require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'




get "/" do

    moon = ['Mars', 'Marte', '%E7%81%AB%E6%98%9F']

    li = moon.map{|word| HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{word}")['items'][0,10]}.inject &:|;

    index = rand li.size

    begin
    @title = li[index]["volumeInfo"]["title"]
    @author = li[index]["volumeInfo"]["author"]
    @cover = li[index]["volumeInfo"]["imageLinks"]["thumbnail"]
    @description = li[index]["volumeInfo"]["description"]
    @catagory = li[index]["volumeInfo"]["categories"][0]
    rescue
        redirect to('/')
    end

    erb :home
end
