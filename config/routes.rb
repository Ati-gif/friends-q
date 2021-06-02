Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  # put all api routes in here
  namespace :api do
    # resources :facts
    
    get '/tvquotes', to: 'tvquotes#index'
    post '/tvquotes', to: 'tvquotes#create'
    
    get '/tvquotes/:id', to: 'tvquotes#show'
    put '/tvquotes/:id', to: 'tvquotes#update'
    patch '/tvquotes/:id', to: 'tvquotes#update'
    delete '/tvquotes/:id', to: 'tvquotes#destroy'
  end
end