import React from "react";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Playlist</h2>
        {this.props.songsInPlaylist.map((song) => (
          <li key={`playlist-${song.id}`}>
            <h4>{song.title}</h4>
            <h4>{song.artistName}</h4>
            <h5>{song.duration}</h5>
            <button
              type="button"
              onClick={() =>
                this.props.removeSongFromPlaylist(song.id)
              }
            >
              Remove Song
            </button>
          </li>
        ))}
      </div>
    );
  }
}
