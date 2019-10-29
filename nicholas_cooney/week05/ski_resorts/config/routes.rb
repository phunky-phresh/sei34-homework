Rails.application.routes.draw do
  root :to => 'resorts#index'
  get '/resorts' => 'resorts#index'

  get '/resorts/new' => 'resorts#new', :as => 'new_resort'
  post '/resorts' => 'resorts#create'

  get '/resorts/:id' => 'resorts#show', :as => 'resort'

  get '/resorts/:id/edit' => 'resorts#edit', :as => 'edit_resort'
  post '/resorts/:id' => 'resorts#update'

  delete '/resorts/:id' => 'resorts#destroy'
end
