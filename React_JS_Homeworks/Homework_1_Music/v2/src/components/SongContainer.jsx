import { useState } from "react";
import SongList from "./SongList";
import Playlist from "./Playlist";

export default function SongContainer() {
  const [songsInPlaylist, setSongsInPlaylist] = useState([]);
  const [songs, setSongs] = useState([
    {
      id: 1,
      title: "In the club",
      artistName: "50 cent",
      duration: 193,
    },
    {
      id: 2,
      title: "Black And Yellow",
      artistName: "Wiz Khalifa",
      duration: 231,
    },
    {
      id: 3,
      title: "Trap Queen",
      artistName: "Fetty Wap",
      duration: 244,
    },
    {
      id: 4,
      title: "Business",
      artistName: "Eminem",
      duration: 252,
    },
    {
      id: 5,
      title: "Rap God",
      artistName: "Eminem",
      duration: 363,
    },
  ]);

  const addToPlaylist = (id) => {
    const song = songs.find((s) => s.id === id);
    setSongsInPlaylist((prevSongs) => [...prevSongs, song]);
  };

  const removeSongFromPlaylist = (id) => {
    setSongsInPlaylist((prevSongs) =>
      prevSongs.filter((s) => s.id !== id)
    );

    setSongs((prevSongs) => {
      return prevSongs.map((song) => {
        if (song.id === id) {
          return {
            ...song,
            enableAddButton: false,
          };
        }
        return song;
      });
    });
  };

  return (
    <div>
      <SongList songs={songs} addToPlaylist={addToPlaylist} />
      <Playlist
        songsInPlaylist={songsInPlaylist}
        removeSongFromPlaylist={removeSongFromPlaylist}
      />
    </div>
  );
}
