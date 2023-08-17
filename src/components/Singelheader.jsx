import React from "react";
import { baseUrl } from "./Banner";

function Singelheader({ imgaeSrc }) {
  return (
    <div className="flex flex-col h-[30vh] space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen  ">
        <img
          className="w-full max-w-full h-full object-cover"
          src={`${baseUrl}${imgaeSrc?.backdrop_path || imgaeSrc?.poster_path}`}
        />
      </div>
    </div>
  );
}

export default Singelheader;
