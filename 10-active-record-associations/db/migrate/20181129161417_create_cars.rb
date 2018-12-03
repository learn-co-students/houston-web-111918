class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :brand
      t.string :color
      t.belongs_to :flatiron_student
      # t.integer :flatiron_student_id
      # t.references :flatiron_student
    end
  end
end
