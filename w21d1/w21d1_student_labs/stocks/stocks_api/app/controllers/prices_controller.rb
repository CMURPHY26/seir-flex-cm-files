class PricesController < ApplicationController

  # GET /prices
  def index
    @prices = Price.all

    render json: @prices
  end

  # POST /prices
  def create
    @price = Price.new(price_params)
    @price.stock_id = params[:stock_id]
    if @price.save
      render json: @price, status: :created
    else
      render json: @price.errors, status: :unprocessable_entity
    end
  end

  private
    # Only allow a trusted parameter "white list" through.
    def price_params
      params.require(:price).permit(:avg_price)
    end
end
