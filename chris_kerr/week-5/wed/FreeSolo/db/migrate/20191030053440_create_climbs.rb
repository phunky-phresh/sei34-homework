class CreateClimbs < ActiveRecord::Migration[6.0]
  def change
    create_table :climbs do |t|
      t.text :name
      t.integer :park_id
      t.integer :height
      t.text :grade
      t.text :first_ascent
    end
  end
end
