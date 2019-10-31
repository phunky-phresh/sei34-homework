class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.text :model
      t.text :year
      t.text :style
      t.integer :engine_capacity #in cubic centimetres
      t.integer :cylinders
      t.text :image

      t.timestamps
    end
  end
end
