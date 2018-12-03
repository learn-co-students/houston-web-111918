class Restaurant < ActiveRecord::Base
  has_many :visits
  has_many :customers, through: :visits
end