class CarsController < ApplicationController
  def index
    @cars = Car.all
  end

  def create

  end
end
