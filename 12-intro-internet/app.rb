require 'pry'

class App
  def call(environment_hash)
    binding.pry

    status_code = 500
    header = {}
    body = ['Server error'] # or {}

    return [status_code, header, body]
  end
end
