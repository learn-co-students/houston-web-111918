class User < ApplicationRecord
    has_many :things
    has_secure_password

    def token
        JWT.encode({ user_id: self.id }, 'asdf')
    end

end
