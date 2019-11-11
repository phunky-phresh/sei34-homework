class Car < ActiveRecord::Base
  belongs_to :manufacturer, :optional=> true
end
