class AddCompanyIdToGames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :company_id, :integer
  end
end
