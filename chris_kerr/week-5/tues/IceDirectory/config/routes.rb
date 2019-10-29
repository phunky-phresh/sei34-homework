Rails.application.routes.draw do
  root :to => 'glaciers#home'
  get '/new' => 'glaciers#new'
  post '/' => 'glaciers#addNew'
  get '/glaciers/:id' => 'glaciers#show', as: 'glacier'
  get '/glaciers/edit/:id' => 'glaciers#edit', as: 'edit_glacier'
end
