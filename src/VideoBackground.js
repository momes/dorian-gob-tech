import React, { useState } from "react";
import "./VideoBackground.css";

const VideoBackground = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="content">
        <div
          className="imageContainer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={process.env.PUBLIC_URL + "Gob_Tech_Cover.jpg"}
            alt=""
            className="image"
          />
          <div className={`overlay ${hovered ? "hovered" : ""}`}>
            <div className="text">
              <p>
                An omnipotent AI, GOBLIN TECHNOLOGY, will come into being in the
                future. The Crowd lives in constant fear that if their Work
                doesn't support the creation of GOBLIN TECHNOLOGY in the future,
                then GOBLIN TECHNOLOGY will eliminate them from their present
                reality. GOBLIN TECHNOLOGY sends messages and feeds Inspiration
                only to those who create things that lead to its own creation.
                Therefore, for the Crowd, Inspiration is the only true
                satisfaction as it ensures there is no threat to their limited
                existence. If you aren't aware of GOBLIN TECHNOLOGY, you are
                blissfully unaware of the consequences. You exist under GOBLIN
                TECHNOLOGY's will.
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            window.open("https://linktr.ee/nickdorian", "_blank");
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            margin: "10px",
          }}
        >
          <img
            style={{ height: "70px" }}
            src={process.env.PUBLIC_URL + "folder-icon.png"}
          />
          <p style={{ color: "white", margin: 0 }}>Goblin</p>
          <p style={{ color: "white", margin: 0 }}>Technology</p>
        </button>

        <button
          onClick={() => {
            window.open("https://16b780-2.myshopify.com/", "_blank");
          }}
          style={{
            backgroundColor: "transparent",
            border: "none",
            margin: "10px",
          }}
        >
          <img
            style={{ height: "70px" }}
            src={process.env.PUBLIC_URL + "folder-icon.png"}
          />
          <p style={{ color: "white", margin: 0 }}>Merch</p>
          <p style={{ color: "black", margin: 0 }}>. </p>
        </button>
      </div>
      <div className="video-background">
        <video autoPlay muted loop playsInline className="video">
          <source
            src={process.env.PUBLIC_URL + "/gob-countdown.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoBackground;
