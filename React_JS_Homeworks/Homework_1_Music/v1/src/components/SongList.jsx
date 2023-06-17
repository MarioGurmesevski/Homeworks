import React from "react";
import Song from "./Song";

export default class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Songs</h2>
        <ul>
          {this.props.songs.map((song) => (
            <Song
              key={song.id}
              {...song}
              addToPlaylist={this.props.addToPlaylist}
            />
          ))}
        </ul>
      </div>
    );
  }
}
