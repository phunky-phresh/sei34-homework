Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/m8b' => 'pages#m8b'
  get '/fortune' => 'pages#fortune'

  get '/sn' => 'pages#sn'
  get '/guess' => 'pages#guess'

  get '/rpshome' => 'rps#home'
  get '/rps' => 'rps#rps'

end
