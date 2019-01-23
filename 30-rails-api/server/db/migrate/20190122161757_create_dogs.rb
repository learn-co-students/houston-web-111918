class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :name
      t.string :breed
      t.string :image_url
      t.belongs_to :owner, foreign_key: true

      t.timestamps
    end
  end
end
