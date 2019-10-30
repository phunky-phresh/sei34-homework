class RenameUpperCaseColumnNamesToLowerCaseNamesInMountainsTable < ActiveRecord::Migration[6.0]
  def change
      rename_column :mountains, :HEIGHT, :height
      rename_column :mountains, :RANGE, :range
      rename_column :mountains, :CONTINENT, :continent
      rename_column :mountains, :IMAGE, :image
  end
end
