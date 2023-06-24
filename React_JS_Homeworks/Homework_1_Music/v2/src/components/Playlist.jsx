import { useEffect, useState } from "react";

export default function Playlist({
  songsInPlaylist,
  removeSongFromPlaylist,
}) {
  const [combinedDuration, setCombinedDuration] = useState(0);

  useEffect(() => {
    const calculateCombinedDuration = () => {
      return songsInPlaylist.reduce(
        (totalDuration, song) => totalDuration + song.duration,
        0
      );
    };

    const duration = calculateCombinedDuration();
    setCombinedDuration(duration);
  }, [songsInPlaylist]);

  return (
    <div>
      <h2>Playlist</h2>
      <h3>Combined Duration: {combinedDuration}</h3>
      {songsInPlaylist.map((song) => (
        <li key={`playlist-${song.id}`}>
          <h4>{song.title}</h4>
          <h4>{song.artistName}</h4>
          <h5>{song.duration}</h5>
          <button
            type="button"
            onClick={() => removeSongFromPlaylist(song.id)}
          >
            Remove Song
          </button>
        </li>
      ))}
    </div>
  );
}
