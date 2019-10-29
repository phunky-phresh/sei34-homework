Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/result' => 'magic#result'

  get '/secret_number' => 'secret_number#form'
  get '/secret_number/result' => 'secret_number#result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#form'
  # get '/'
  get '/rock_paper_scissors/:throw' => 'rock_paper_scissors#throw'
end
