class Tweet
  attr_accessor :message, :username
  # ALL = []

  def self.all
    # ALL
    query = <<-SQL
    SELECT * FROM tweets;
    SQL

    tweets = DB[:conn].execute(query)

    tweets.map do |tweet|
      Tweet.new(tweet)
    end
  end

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    # ALL << self
  end
  
  def save
    query = <<-SQL
    INSERT INTO tweets (username, message) VALUES (?, ?);
    SQL

    DB[:conn].execute(query, self.username, self.message)
  end

  def self.create(props={})
    tweet = Tweet.new(props)
    tweet.save
  end
end
