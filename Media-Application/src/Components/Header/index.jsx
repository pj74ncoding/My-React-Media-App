import React from "react";
import foxImage from "../../images/foxhead.png"

export const MediaHeader = () => {
  return (
    <>
      <div className="media-header-container">
        {/* <img
          src="public/images/foxhead.png"
          height="150px"
          width="150px"
          alt=""
        /> */}
          <img
          src={foxImage}
          height="120px"
          width="120px"
          alt=""
        />
        <h1>Foxy74Media</h1>
      </div>
    </>
  );
};
