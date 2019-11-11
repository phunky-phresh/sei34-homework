# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_30_065748) do

  create_table "animations", force: :cascade do |t|
    t.text "title"
    t.text "image"
    t.text "year"
    t.text "actors"
    t.float "box_office"
    t.integer "producer_id"
  end

  create_table "producers", force: :cascade do |t|
    t.text "name"
    t.text "logo"
    t.text "foundation_year"
  end

end
