import { useState } from "react";
import { main_style } from "../Css/style";
import Player from "react-player";

function Main() {
  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };

  return (
    <>
      <div>
        <Player
          url="https://youtu.be/KUUVDYI3iUM"
          width="auto"
          height="97.5vh"
          muted={true} //chrome정책으로 인해 자동 재생을 위해 mute 옵션을 true로 해주었다.
          playing={true}
          loop={true}
          style={{ pointerEvents: "none" }}
        />
      </div>
    </>
  );
}

export default Main;
