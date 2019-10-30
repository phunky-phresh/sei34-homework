Rails.application.routes.draw do
  get 'albums/index'
  get 'albums/new'
  get 'albums/edit'
  get 'albums/show'
  # get 'artists/index'
  # get 'artists/new'
  # get 'artists/edit'
  # get 'artists/show'
  resources :artists

end
