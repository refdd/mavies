import React from "react";

function OverView({ movieData }) {
  return (
    <div className=" container mx-auto px-4 md:px-10">
      <div className="flex gap-16 rounded-b-md  py-8">
        <div className="space-y-10 text-lg">
          <div className="flex items-center gap-2 text-base">
            <p className="font-semibold text-green-400">
              {movieData?.vote_average * 10}% Match
            </p>
            <p className="font-light">
              {movieData?.release_date || movieData?.first_air_date}
            </p>
            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
              HD
            </div>
          </div>

          <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
            <p className="w-5/6 text-xl">{movieData?.overview}</p>
            <div className="flex flex-col space-y-3 text-sm">
              <div>
                <span className="text-[gray]">Genres: </span>
              </div>

              <div>
                <span className="text-[gray]">Original language: </span>
                {movieData?.original_language}
              </div>

              <div>
                <span className="text-[gray]">Total votes: </span>
                {movieData?.vote_count}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
