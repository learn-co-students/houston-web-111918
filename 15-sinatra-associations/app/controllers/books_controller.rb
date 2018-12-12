class BooksController < ApplicationController
  get '/books' do
    @books = Book.all

    erb :'books/index'
  end

  get '/books/new' do
    @authors = Author.all

    erb :'books/new'
  end

  post '/books' do
    Book.create(params[:books])

    redirect '/books'
  end

  get '/books/:id' do
    @book = Book.find(params[:id])

    erb :'books/show'
  end
end
