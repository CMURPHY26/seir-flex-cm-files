class SongsController < ApplicationController
    def index
        #long form syntax to connect directly into the database through ActiveRecord so you can issue SQL commands
        # render json: ActiveRecord::Base.connection.execute('SELECT * FROM songs;')

        # shorter syntax to use Object Relation Mapper
        # render json: Song.all

        #If we are going to deliver our API to some end-user, we should provide a status code.
        #Change the code to deliver a 200 OK status code:
        songs = Song.all
        render json: {status: 200, songs: songs}
    end

    def show
        #in javascript it was req.params.id instead of params[:id]
        # render json: Song.find(params[:id])
        song = Song.find(params[:id])
        render json: {status: 200, song: song}
    end

end


