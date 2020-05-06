class Song < ApplicationRecord
    has_many :playlists_songs
    has_many :playlists, through: :playlists_songs
end
