Rails.application.routes.draw do
  root :to => 'countries#index'
  resources :parks
  resources :countries
  resources :climbs
end
