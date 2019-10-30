class AddNewColumnsToMountainsTable < ActiveRecord::Migration[6.0]
  def change
    add_column :mountains, :countries, :text
    add_column :mountains, :year_of_first_ascent, :integer
    add_column :mountains, :climber_first_ascent, :text
  end
end
