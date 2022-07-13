class ContestsController < ApplicationController
    skip_before_action :check_xhr
  
    def index
      Rails.logger.info '🚂 Called the `ContestsController#index` method.'
    end
end