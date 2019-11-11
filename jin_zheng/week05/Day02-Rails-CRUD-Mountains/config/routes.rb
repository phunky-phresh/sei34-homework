Rails.application.routes.draw do

    root :to => 'volcanoes#index'
    get '/volcanoes' => 'volcanoes#index', :as => 'volcanoes'
    get '/volcanoes/new' => 'volcanoes#new', :as => 'new_volcanoes'
    post '/volcanoes' => 'volcanoes#create'

    get '/volcano/:id/edit' => 'volcanoes#edit', :as => 'edit_volcano'
    post '/volcano/:id' => 'volcanoes#update'

    get '/volcano/:id' => 'volcanoes#show', :as => 'volcano'

    get '/volcano/:id/delete' => 'volcanoes#delete', :as => 'confirm_delete'

    delete '/volcano/:id' => 'volcanoes#destroy', :as => 'delete_volcano'


    # get ''
    # get '/'
end
