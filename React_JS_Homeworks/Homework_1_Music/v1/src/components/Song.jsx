import React from "react";
import PropTypes from "prop-types";

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false,
    };
    console.log(props);
  }

  render() {
    const { isAdded } = this.state;
    return (
      <li>
        <h4>{this.props.title}</h4>
        <h4>{this.props.artistName}</h4>
        <h5>{this.props.duration}</h5>
        <button
          disabled={isAdded}
          type="button"
          onClick={() => {
            this.props.addToPlaylist(this.props.id);
            this.setState({ isAdded: true });
          }}
        >
          Add to Playlist
        </button>
      </li>
    );
  }
}

Song.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  artistName: PropTypes.string,
  duration: PropTypes.number,
  addToPlaylist: PropTypes.func,
};
