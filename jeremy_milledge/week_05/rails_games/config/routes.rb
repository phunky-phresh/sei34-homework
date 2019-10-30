Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'
  get '/eight' => 'eight#question'
  get '/eight/answer' => 'eight#answer'
  get '/secret' => 'secret#guess'
  # post '/secret/result' => 'secret#result'
  get '/secret/result' => 'secret#result'
  get '/rps' => 'rps#throw'
  get '/rps/outcome' => 'rps#outcome'

end
