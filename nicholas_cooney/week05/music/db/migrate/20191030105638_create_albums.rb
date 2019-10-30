class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.text :title
      t.text :release
      t.text :image

      
    end
  end
end
