class LionsController < ApplicationController
  # before_action :set_lion, only: [:show, :edit, :update, :destroy]

  def index
    @lions = Lion.all
  end
  
  def show
    @lion = Lion.find(params[:id])
  end

  # def new
  #   @lion = Lion.new
  # end

  def create
    Lion.create(lion_params)

    redirect_to lions_path
  end

  private

  def set_lion
    @lion = Lion.find(params[:id])
  end

  def lion_params
    params.require(:lion).permit(:name, :gender, :color, :american_id)
  end
end
