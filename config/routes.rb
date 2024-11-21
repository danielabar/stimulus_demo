Rails.application.routes.draw do
  scope "(:locale)", locale: /en|es/ do
    root "welcome#index"

    get "welcome/index"
  end

  # Defines the health check route
  get "up" => "rails/health#show", as: :rails_health_check
end
