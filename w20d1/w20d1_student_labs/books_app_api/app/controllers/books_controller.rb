class BooksController < ApplicationController
    def index
        books = Book.all
        # render json: books
        render json: {status: 200, books: books}
    end


end