class Game < ActiveRecord::Base
    belongs_to :company, :optional => true
end
