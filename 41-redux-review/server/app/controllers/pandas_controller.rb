class PandasController < ApplicationController

    before_action :define_current_panda

    def create
        panda = Panda.create(panda_params)
        render json: panda
    end

    def index
        render json: Panda.all
    end

    def show
        render json: current_panda
    end

    def update
        current_panda.update(panda_params)
        render json: current_panda
    end

    def destroy
        current_panda.destroy
        render json: current_panda
    end

    def panda_params
        params.permit(:name, :fluff_percentage, :img_url)
    end

    def define_current_panda
        if params[:id]
            @current_panda = Panda.find(params[:id])
        else
            @current_panda = Panda.new
        end
    end

    def current_panda
        @current_panda
    end
end