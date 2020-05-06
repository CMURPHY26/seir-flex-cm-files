class PlaylistsSongsController < ApplicationController
  before_action :set_playlists_song, only: [:show, :update, :destroy]

  # GET /playlists_songs
  def index
    @playlists_songs = PlaylistsSong.all

    render json: @playlists_songs.to_json(include: [:song, :playlist])
  end

  # GET /playlists_songs/1
  def show
    render json: @playlists_song.to_json(include: [:song, :playlist])
  end

  # POST /playlists_songs
  def create
    @playlists_song = PlaylistsSong.new(playlists_song_params)

    if @playlists_song.save
      render json: @playlists_song, status: :created, location: @playlists_song
    else
      render json: @playlists_song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /playlists_songs/1
  def update
    if @playlists_song.update(playlists_song_params)
      render json: @playlists_song
    else
      render json: @playlists_song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /playlists_songs/1
  def destroy
    @playlists_song.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_playlists_song
      @playlists_song = PlaylistsSong.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def playlists_song_params
      params.require(:playlists_song).permit(:song_id, :playlist_id)
    end
end
