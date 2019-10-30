class AddImageToDirectors < ActiveRecord::Migration[6.0]
  def change
    add_column :directors, :image, :text
  end
end
