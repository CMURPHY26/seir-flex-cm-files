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
        #to view params that are provided
        puts params
        #Deliver status code with response
        song = Song.find(params[:id])
        render json: {status: 200, song: song}
    end

    def create
        #creates a new song but uses strong params through song_params to validate the data
        song = Song.new(song_params)

        if song.save
            #if found render status 201
            render(status: 201, json: { song: song })
        else
            render(status: 422, json: { song: song })
        end
    end

    private #Any methods below here

    def song_params
        #Returns a sanitized hash of the params with nothing extra
        #requiring the song model and permitting only these fields
        params.required(:song).permit(:title,:artist_name, :artwork)
    end

end
