class StocksController < ApplicationController

  # GET /stocks
  def index
    @stocks = Stock.all

    render json: @stocks
  end

  # GET /stocks/1
  def show
    @stock = Stock.find(params[:id])
    render json: @stock.to_json(include: :prices)
  end

end
