class CreateThings < ActiveRecord::Migration[5.2]
  def change
    create_table :things do |t|
      t.string :name
      t.string :description
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
