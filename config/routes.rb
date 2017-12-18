Rails.application.routes.draw do
  root to: 'prices#index'
  post '/refresh', to: 'prices#refresh'
end
