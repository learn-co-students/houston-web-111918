class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  set :method_override, true
  
  # Get all books
  get '/books' do
    @books = Book.all

    erb :'books/index'
  end

  # Create book form
  get '/books/new' do
    erb :'books/new'
  end

  # Get one book
  get '/books/:id' do
    @book = Book.find(params[:id])

    erb :'books/show'
  end

  # Create book request
  post '/books' do
    Book.create(params[:books])

    redirect '/books'
  end

  # Update book form
  get '/books/:id/edit' do
    @book = Book.find(params[:id])

    erb :'books/edit'
  end

  # Update book request
  patch '/books/:id' do
    @book = Book.find(params[:id])

    @book.update(params[:books])

    redirect '/books'
  end

  # Delete book
  delete '/books/:id' do
    @book = Book.find(params[:id])

    @book.destroy

    redirect '/books'
  end

  private

  def book
    Book.find(params[:id])
  end
end
