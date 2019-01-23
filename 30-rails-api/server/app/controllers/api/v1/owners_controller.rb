class Api::V1::OwnersController < ApplicationController

   before_action :define_current_owner
   
   def create
       owner = Owner.create(owner_params)
       render json: owner
   end
   
   def index
       render json: Owner.all, methods: [ :dogs ]
   end
   
   def show
       render json: current_owner, methods: [ :dogs ]
   end
   
   def update
       current_owner.update(owner_params)
       render json: current_owner
   end
   
   def destroy
       current_owner.destroy
       render json: current_owner
   end
   
   def owner_params
       params.permit(:name)
   end
   
   def define_current_owner
       if params[:id]
           @current_owner = Owner.find(params[:id])
       else
           @current_owner = Owner.new
       end
   end
   
   def current_owner
       @current_owner
   end

end
