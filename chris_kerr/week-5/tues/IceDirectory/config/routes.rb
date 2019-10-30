Rails.application.routes.draw do
  root :to => 'glaciers#home'
  get '/new' => 'glaciers#new'
  post '/' => 'glaciers#addNew'
  get '/glaciers/:id' => 'glaciers#show', as: 'glacier'
  post '/glaciers/:id' => 'glaciers#submitEdit'
  get '/glaciers/edit/:id' => 'glaciers#edit', as: 'edit_glacier'
  delete '/glaciers/:id' => 'glaciers#delete', as: 'delete_glacier'
end
