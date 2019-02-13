class ThingsController < ApplicationController
    before_action :define_current_thing
    
    def create
        thing = Thing.new(thing_params)
        thing.user = current_user
        thing.save
        render json: thing
    end
    
    def index
        render json: Thing.all
    end
    
    def show
        render json: current_thing
    end
    
    def update
        current_thing.update(thing_params)
        render json: current_thing
    end
    
    def destroy
        if current_user == current_thing.user
            current_thing.destroy
            render json: current_thing
        else 
            render json: { error: true, message: 'You can\'t delete this thing'}
        end
    end
    
    def thing_params
        params.permit(:name, :description, :user_id)
    end
    
    def define_current_thing
        if params[:id]
            @current_thing = Thing.find(params[:id])
        else
            @current_thing = Thing.new
        end
    end
    
    def current_thing
        @current_thing
    end
end
