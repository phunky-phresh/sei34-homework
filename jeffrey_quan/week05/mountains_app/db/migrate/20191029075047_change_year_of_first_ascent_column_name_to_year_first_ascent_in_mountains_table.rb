class ChangeYearOfFirstAscentColumnNameToYearFirstAscentInMountainsTable < ActiveRecord::Migration[6.0]
  def change
    rename_column :mountains, :year_of_first_ascent, :year_first_ascent
  end
end
