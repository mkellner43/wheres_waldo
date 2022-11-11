Rails.application.routes.draw do
  resources :characters
  resources :scores
  resources :images

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
