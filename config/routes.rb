Rails.application.routes.draw do
  devise_for :users
  root to: "blog#index"
  patch "blog", to: "blog#update" 
  resources :blog, only: [:index, :show, :new, :destroy, :update, :create] 
  
end
