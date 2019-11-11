class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
        t.text :title
        t.text :genre
        t.text :composer
        t.date :initial_release
        t.text :image
        t.text :website

        t.timestamps
    end
  end
end
