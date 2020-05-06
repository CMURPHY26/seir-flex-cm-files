class CreatePlaylistsSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :playlists_songs do |t|
      t.references :song, null: false, foreign_key: true
      t.references :playlist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
