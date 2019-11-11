ActiveRecord::Schema.define(version: 2019_10_30_064310) do

  create_table "cars", force: :cascade do |t|
    t.text "model"
    t.text "year"
    t.text "style"
    t.integer "engine_capacity"
    t.integer "cylinders"
    t.text "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "manufacturer_id"
  end

  create_table "manufacturers", force: :cascade do |t|
    t.text "name"
    t.text "parent"
    t.text "origin"
    t.text "founded"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
