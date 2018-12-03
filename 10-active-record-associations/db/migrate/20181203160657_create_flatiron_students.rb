class CreateFlatironStudents < ActiveRecord::Migration[5.2]
  def change
    create_table :flatiron_students do |t|
      t.string :name
    end
  end
end
