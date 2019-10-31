Rails.application.routes.draw do
  #homepage
  root :to => 'pages#index'
  get '/oceans' => 'pages#index'

  # add new ocean
  get '/ocean/new' => 'pages#new', :as => 'new_ocean'
  post '/oceans' => 'pages#create'

  #show individual ocean
  get '/ocean/:id' => 'pages#show', :as => 'ocean'

  #edit ocean
  get '/ocean/:id/edit' => 'pages#edit', :as => 'edit_ocean'
  post 'ocean/:id' => 'pages#update'

  #delete ocean
  delete 'ocean/:id' => 'pages#destroy'
end
