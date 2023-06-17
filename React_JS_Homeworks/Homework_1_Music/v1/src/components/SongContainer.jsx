import React from "react";
import SongList from "./SongList";
import Playlist from "./Playlist";

export default class SongContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [
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
          title: "Never Enough",
          artistName: "Eminem",
          duration: 160,
        },
      ],
      songsInPlaylist: [],
    };
  }

  addToPlaylist(id) {
    const song = this.state.songs.find((s) => s.id === id);
    this.setState((prevState) => ({
      songsInPlaylist: [...prevState.songsInPlaylist, song],
    }));
  }

  removeSongFromPlaylist(id) {
    this.setState((prevState) => ({
      songsInPlaylist: prevState.songsInPlaylist.filter(
        (s) => s.id !== id
      ),
    }));
  }

  render() {
    return (
      <div>
        <SongList
          songs={this.state.songs}
          addToPlaylist={this.addToPlaylist.bind(this)}
        />
        <Playlist
          songsInPlaylist={this.state.songsInPlaylist}
          removeSongFromPlaylist={this.removeSongFromPlaylist.bind(
            this
          )}
        />
      </div>
    );
  }
}
