class BooksController < ApplicationController
    def index
        books = Book.all
        # render json: books
        render json: {status: 200, books: books}
    end

    def show
        book = Book.find(params[:id])
        render json: {status: 200, book: book}
    end


end