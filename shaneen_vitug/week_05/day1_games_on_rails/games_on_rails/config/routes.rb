Rails.application.routes.draw do
  root :to => 'pages#games'

  get '/magic8ball' => 'magic8ball#question'
  get '/magic8ball/result' => 'magic8ball#result'

  get '/secretnumber' => 'secretnumber#number'
  get '/secretnumber/result' => 'secretnumber#result'

  get '/rockpaperscissors' => 'rockpaperscissors#shape'
  get '/rockpaperscissors/play' => 'rockpaperscissors#play'
end
