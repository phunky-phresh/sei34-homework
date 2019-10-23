require 'sinatra'
require 'httparty'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/book' do
  @title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}&max-results=20"
  items = HTTParty.get(url)
  if items["totalItems"] == 0
    @hits = {};
  else
    binding.pry
    @hits = items["items"].map do |x|
      {
        :title=> x["volumeInfo"]["title"],
        :authors=> x["volumeInfo"]["authors"].to_a.join(', '),
        :description=> x["volumeInfo"]["description"],
        :preview=> x["volumeInfo"]["previewLink"],
        :thumb=> x["volumeInfo"]["imageLinks"]["thumbnail"]
      }
    end
  end

  erb :book
end
