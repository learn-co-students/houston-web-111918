class ApplicationController < Sinatra::Base
  set :views, 'app/views'
  
  # Get all books
  get '/books' do
    @books = Book.all

    erb :'books/index'
  end

  # Get one book
  get '/books/:id' do
    @book = Book.find(params[:id])
    
    erb :'books/show'
  end
end
