import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Song({
  id,
  title,
  artistName,
  duration,
  addToPlaylist,
  enableAddButton,
}) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(enableAddButton);
  }, [enableAddButton]);

  return (
    <li>
      <h4>{title}</h4>
      <h4>{artistName}</h4>
      <h5>{duration}</h5>
      <button
        disabled={isAdded}
        type="button"
        onClick={() => {
          addToPlaylist(id);
          setIsAdded(true);
        }}
      >
        {isAdded ? "Added" : "Add to Playlist"}
      </button>
    </li>
  );
}

Song.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  artistName: PropTypes.string,
  duration: PropTypes.number,
  addToPlaylist: PropTypes.func,
};
