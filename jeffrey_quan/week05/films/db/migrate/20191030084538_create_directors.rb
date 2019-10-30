class CreateDirectors < ActiveRecord::Migration[6.0]
  def change
    create_table :directors do |t|
      t.text :name
      t.date :dob
      t.text :nationality

      t.timestamps
    end
  end
end
