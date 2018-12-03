class CreateVisits < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.belongs_to :customer
      t.belongs_to :restaurant
    end
  end
end
