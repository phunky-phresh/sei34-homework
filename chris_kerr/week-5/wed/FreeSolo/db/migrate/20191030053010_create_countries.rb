class CreateCountries < ActiveRecord::Migration[6.0]
  def change
    create_table :countries do |t|
      t.text :name
      t.integer :area
      t.text :continent
    end
  end
end
