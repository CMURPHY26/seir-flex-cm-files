class SongsController < ApplicationController
    def index
        #long form syntax to connect directly into the database through ActiveRecord so you can issue SQL commands
        render json: ActiveRecord::Base.connection.execute('SELECT * FROM songs;')
        render json: Song.all
    end

end


