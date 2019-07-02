Rails.application.routes.draw do
 resources :comments 
 namespace :api do 
  resources :songs
  
 end
end
