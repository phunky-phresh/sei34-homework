class CreateManufacturers < ActiveRecord::Migration[6.0]
  def change
    create_table :manufacturers do |t|
      t.text :name
      t.text :parent
      t.text :origin
      t.text :founded

      t.timestamps
    end
  end
end
