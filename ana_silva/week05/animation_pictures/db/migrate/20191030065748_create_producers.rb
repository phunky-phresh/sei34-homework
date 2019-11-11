class CreateProducers < ActiveRecord::Migration[6.0]
  def change
    create_table :producers do |t|
      t.text :name
      t.text :logo
      t.text :foundation_year
    end
  end
end
