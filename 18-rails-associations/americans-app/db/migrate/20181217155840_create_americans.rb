class CreateAmericans < ActiveRecord::Migration[5.2]
  def change
    create_table :americans do |t|
      t.string :name
      t.string :state
      t.integer :num_guns

      t.timestamps
    end
  end
end
