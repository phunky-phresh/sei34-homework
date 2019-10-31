class Park < ActiveRecord::Base
    has_many :climbs
    belongs_to :country, :optional => true
end
