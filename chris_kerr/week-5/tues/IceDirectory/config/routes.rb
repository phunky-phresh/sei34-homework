Rails.application.routes.draw do
  root :to => 'glaciers#home'
  get '/new' => 'glaciers#new'
  
end
