class LocationsController < ApplicationController
  # GET /locations
  def index
    @locations = Location.all
    render json: @locations
  end
  # GET /locations/1
  def show
    #to show params hash puts params in any route
    # puts "=========================="
    # puts params
    # puts "=========================="

    @location = Location.find(params[:id])
    render json: @location.to_json(include: :temperatures)
  end
end