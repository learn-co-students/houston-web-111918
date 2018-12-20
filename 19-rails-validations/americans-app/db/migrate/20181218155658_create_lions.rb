class CreateLions < ActiveRecord::Migration[5.2]
  def change
    create_table :lions do |t|
      t.belongs_to :american, foreign_key: true
      t.string :name
      t.string :gender
      t.string :color

      t.timestamps
    end
  end
end
