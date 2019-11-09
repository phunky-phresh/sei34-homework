class Animation < ActiveRecord::Base
  belongs_to :producer, :optional => true 
end
