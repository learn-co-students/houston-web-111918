Rails.application.routes.draw do
  resources :lions
  resources :americans
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/randomroute', to: 'application#randomroute', as: 'myfavoriteroute'
end
