Rails.application.routes.draw do
  root :to => 'resorts#index'
  get '/resorts' => 'resorts#index'

  get '/resorts/new' => 'resorts#new'
end
