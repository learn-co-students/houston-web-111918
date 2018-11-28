require 'pry'
require_relative './book'
require_relative './author'

tolkien = Author.new('tolkien')
rowling = Author.new('rowling')
doskevsky = Author.new('doskevsky')

lotr = Book.new(tolkien, 'lord of the rings', 200)
silmarilian = Book.new(tolkien, 'simlariljian', 50)
harry_plopper = Book.new(rowling, 'harry plopper', 300)
crime_punishment = Book.new(doskevsky, 'crime and punisher', 250)

rowling.write_book('harry plucker', 2398752)

binding.pry


