class TemperaturesController < ApplicationController

  # GET /temperatures
  def index
    @temperatures = Temperature.all

    render json: @temperatures
  end

  # POST /temperatures
  def create
    @temperature = Temperature.new(temperature_params)
    @temperature.location_id = params[:location_id]

    if @temperature.save
      render json: @temperature, status: :created
    else
      render json: @temperature.errors, status: :unprocessable_entity
    end
  end

  private
  #private: can write methods that only this class can access to protect from calling a method you didn't meant to call

    # Only allow a trusted parameter "white list" through.
    def temperature_params
      params.require(:temperature).permit(:average_high_f, :average_low_f, :month)
    end
end
