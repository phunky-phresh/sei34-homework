Rails.application.routes.draw do

    root to: 'pages#home'

    get '/magic8ball' => 'magic8ball#home'
    get '/magic8ball/answer' => 'magic8ball#answer'

    get '/secretnumber' => 'secretnumber#home'
    get '/secretnumber/:number' => 'secretnumber#result'

    get '/rps' => 'rps#home'
    get '/rps/:throw' => 'rps#compare'

end
