Rails.application.routes.draw do
  root :to => "animations#index"
  resources :animations
  resources :producers
end
