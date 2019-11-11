class Climb < ActiveRecord::Base 
    belongs_to :park, :optional => true
end