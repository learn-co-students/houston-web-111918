class User < ApplicationRecord
    has_many :things
    has_secure_password
end
