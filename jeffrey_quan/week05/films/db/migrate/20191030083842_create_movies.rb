class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :genre
      t.text :year
      t.text :image
      t.integer :director_id

      t.timestamps
    end
  end
end
