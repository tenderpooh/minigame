import React from "react";
import map from "./map.jpeg";

const Map = () => {
  return (
    <img
      src={map}
      alt="게임 지도"
      className="text-center align-items-center justify-content-center img-fluid"
      style={{
        width: "80%",
        height: "auto"
      }}
    />
  );
};

export default Map;
