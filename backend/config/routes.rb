Rails.application.routes.draw do
  resources :categories, only: [:create, :index]
  post '/authenticate', to: 'authentications#authenticate'
  post '/users/', to: 'users#create', as: :user
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
