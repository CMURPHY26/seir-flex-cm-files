require 'test_helper'

class PlaylistsSongsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @playlists_song = playlists_songs(:one)
  end

  test "should get index" do
    get playlists_songs_url, as: :json
    assert_response :success
  end

  test "should create playlists_song" do
    assert_difference('PlaylistsSong.count') do
      post playlists_songs_url, params: { playlists_song: { playlist_id: @playlists_song.playlist_id, song_id: @playlists_song.song_id } }, as: :json
    end

    assert_response 201
  end

  test "should show playlists_song" do
    get playlists_song_url(@playlists_song), as: :json
    assert_response :success
  end

  test "should update playlists_song" do
    patch playlists_song_url(@playlists_song), params: { playlists_song: { playlist_id: @playlists_song.playlist_id, song_id: @playlists_song.song_id } }, as: :json
    assert_response 200
  end

  test "should destroy playlists_song" do
    assert_difference('PlaylistsSong.count', -1) do
      delete playlists_song_url(@playlists_song), as: :json
    end

    assert_response 204
  end
end
