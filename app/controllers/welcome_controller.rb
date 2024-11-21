class WelcomeController < ApplicationController
  def index
    @very_important_content = I18n.t("welcome.index.very_important_content")
  end
end
