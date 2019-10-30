class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.text :genre
      t.text :image

      t.timestamps
    end
  end
end
