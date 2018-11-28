class Author
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def books
    Book.all.select do |book|
      book.author == self
    end
  end

  def write_book(title, word_count)
    Book.new(self, title, word_count)
  end

  def total_words
    word_count = 0

    books.each do |book|
      word_count += book.word_count
    end

    # Book.all.each do |book|
    #   if book.author == self
    #     word_count += book.word_count
    #   end
    # end

    # books.map(&:word_count).inject(:+)

    word_count
  end

  def self.most_words
    # 1. Create empty variables to store data in
    # 2. Iterate through all the authors (Author.all)
    # 3. if author's total word count is greater than current total word count, set author_with_most_words to current author
    # 4. return author_with_most_words

    puts "woohoo we did it"

    self.all.max_by do |author|
      author.total_words
    end

    # current_most_words = self.all.first.total_words # (tolkien's total words)
    # author_with_most_words = self.all.first # tolkien instance

    # self.all.each do |author|
    #   if author.total_words > current_most_words
    #     author_with_most_words = author
    #   end
    # end

    # author_with_most_words
  end
end