class Api::TvquotesController < ApplicationController
  before_action :set_tvquote, only: [:show, :update, :destroy]

  def index
      render json: Tvquote.all
  end 

  def show
     render json: @tvquote
  end
  
  def create
     @tvquote = Tvquote.new(tvquote_params)
     if(@tvquote.save)
      render json: @tvquote
     else
      render json: {errors: @tvquote.errors.full_messages}, status: :unprocessable_entity
     end
  end

  def update
      if(@tvquote.update(tvquote_params))
       render json: @tvquote
      else
       render json: {errors: @tvquote.errors.full_messages}, status: :unprocessable_entity
      end
   end

   def destroy
      render json: @tvquote.destroy
   end

  private

  def tvquote_params
    params.require(:tvquote).permit(:text, :stars, :username, :souce)
  end

  def set_tvquote
    @tvquote = Tvquote.find(params[:id])
  end
end
