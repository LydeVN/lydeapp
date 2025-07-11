import React from "react";
import TwitchEmbed from "./TwitchEmbed";
import "../assets/team.css";

const Team = () => {
  return (
    <>
      <div className="team-container">
        <div className="team-embed">
          <TwitchEmbed channel={"lydevn"} />
        </div>
        <div className="team-embed">
          <TwitchEmbed channel={"thedi4nier"} />
        </div>
        <div className="team-embed">
          <TwitchEmbed channel={"raisintimide"} />
        </div>
      </div>
    </>
  );
};

export default Team;
