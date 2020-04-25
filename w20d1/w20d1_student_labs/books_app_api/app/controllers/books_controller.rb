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

    def preview
        book = Book.find(params[:id])
        render json: {status: 200, book: book.title, author: book.author}
    end

    def create
        book = Book.new(book_params)
        if book.save
            render(status: 201, json: {book: book})
        else
            render(status: 422, json: {book: book})
        end
    end

    def update
        book = Book.find(params[:id])
        book.update(book_params)
        if book.save
            render status: 200, json: {book:book}
        else
            render status: 422, json: {error: book.errors}
        end
    end

    def destroy
        book = Book.destroy(params[:id])
        render json: {status: 204}
    end


    private

    def book_params
        params.require(:book).permit(:title, :author, :genre, :publisher, :publish_date)
    end

end