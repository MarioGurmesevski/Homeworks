import Song from "./Song";

export default function SongList({ songs, addToPlaylist }) {
  return (
    <div>
      <h2>Songs</h2>
      <ul>
        {songs.map((song) => (
          <Song
            key={song.id}
            {...song}
            addToPlaylist={addToPlaylist}
          />
        ))}
      </ul>
    </div>
  );
}
