class Dog < ApplicationRecord
  belongs_to :owner
  accepts_nested_attributes_for :owner
end
