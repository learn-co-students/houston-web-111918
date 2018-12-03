class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :brand
      t.string :color
      t.integer :year
      t.string :model
      t.integer :price
    end
  end
end
