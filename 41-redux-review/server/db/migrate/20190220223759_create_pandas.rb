class CreatePandas < ActiveRecord::Migration[5.2]
  def change
    create_table :pandas do |t|
      t.string :name
      t.string :fluff_percentage
      t.string :img_url

      t.timestamps
    end
  end
end
