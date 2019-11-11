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

ActiveRecord::Schema.define(version: 2019_10_30_053440) do

  create_table "climbs", force: :cascade do |t|
    t.text "name"
    t.integer "park_id"
    t.integer "height"
    t.text "grade"
    t.text "first_ascent"
  end

  create_table "countries", force: :cascade do |t|
    t.text "name"
    t.integer "area"
    t.text "continent"
  end

  create_table "parks", force: :cascade do |t|
    t.text "name"
    t.integer "country_id"
    t.integer "area"
    t.integer "numb_climbs"
    t.text "image"
    t.text "description"
  end

end
