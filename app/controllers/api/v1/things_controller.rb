module Api::V1
  class ThingsController < ApplicationController
    def index
      @things = Thing.all
      render json: @things
    end
  end
end
