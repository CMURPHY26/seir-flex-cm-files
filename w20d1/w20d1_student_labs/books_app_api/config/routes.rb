Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :books

  resources :books do
    get 'preview', on: :member 
  end
end
