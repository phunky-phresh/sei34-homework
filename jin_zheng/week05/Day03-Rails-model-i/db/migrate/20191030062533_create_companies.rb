class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
        t.text :name
        t.text :founder
        t.date :founded
        t.text :headquarter
        t.text :image
        t.text :website

        t.timestamps
    end
  end
end
