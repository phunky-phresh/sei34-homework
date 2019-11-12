class CreateAnimations < ActiveRecord::Migration[6.0]
  def change
    create_table :animations do |t|
      t.text :title
      t.text :image
      t.text :year
      t.text :actors
      t.float :box_office
      t.integer :producer_id
    end
  end
end
