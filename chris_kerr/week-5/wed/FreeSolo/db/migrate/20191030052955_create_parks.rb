class CreateParks < ActiveRecord::Migration[6.0]
  def change
    create_table :parks do |t|
      t.text :name
      t.integer :country_id
      t.integer :area
      t.integer :numb_climbs
      t.text :image
      t.text :description
    end
  end
end
