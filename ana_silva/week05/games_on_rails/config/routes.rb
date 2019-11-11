Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get "/" => "games#home"
  get "/m8b" => "games#m8b"
  get "/m8b/answer" => "games#answer"
  get "/secret_number" => "games#secret_number"
  get "/secret_number/guess" => "games#guess"
  get "rps" => "games#rps"
  get "rps/play" => "games#play"
end
