class AmericansController < ApplicationController
  def index
    @americans = American.all
  end
  
  def show
    @american = American.find(params[:id])
  end

  def new
    # @american = American.new
  end

  def create
    American.create(american_params)

    redirect_to americans_path
    # redirect_to "/americans"
  end

  def edit
    @american = American.find(params[:id])
  end

  def update
    american = American.find(params[:id])

    american.update(american_params)

    redirect_to american
    # redirect_to american_path(american)
    # redirect_to "/americans/#{american.id}"
  end

  def destroy
    american = American.find(params[:id])

    american.destroy

    redirect_to americans_path
  end

  private

  def american_params
    params.require(:american).permit(:name, :state, :num_guns)
  end
end
