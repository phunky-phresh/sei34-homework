require 'rspotify'
require 'pry'

RSpotify::authenticate('6b64671c7f20476d9ec452cf94843a74', 'd015fb0f39a64a54893b036ac246d5f9')
artists = RSpotify::Artist.search('Arctic Monkeys')
binding.pry