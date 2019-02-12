class ApplicationController < ActionController::API

    before_action :authenticate

    def encode_token(user)
        JWT.encode({ user_id: user.id }, 'asdf')
    end

    def decode_token(token)
        JWT.decode(token, 'asdf')
    end

    def current_user
        begin 
            method, token = request.headers['Authorization'].split(' ')
            payload, header = decode_token(token)
            User.find(payload["user_id"])
        rescue JWT::DecodeError
            nil
        end
    end


    def authenticate
        if !current_user
            render json: { error: true, message: 'Please Login'}
        end
    end

end
