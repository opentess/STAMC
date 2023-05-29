import SwitchUI from "../components/ui/Switch";

import { useEffect, useState } from "react";
import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

import {
  ArrowTopRightOnSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { authorize } from "../utils/authorize/authorize";
import useInit from "../utils/spotify/useInit";
export default function Home() {
  const { user, setUser, topTacks, setTopTracks, playlists, setPlaylists } =
    useInit();

  return (
    <main className="relative h-screen flex items-start justify-center p-5 gap-4 ">
      {!user && (
        <div className="bg-white w-full max-w-sm rounded-md p-5 flex flex-col justify-start text-gray-900 border border-violet-100 shadow-sm gap-2 self-center">
          <h3 className="text-lg font-semibold ">Stamc</h3>
          {/* <button
          onSubmit={() => loginHandler}
          className="mt-2 text-gray-200 text-sm bg-red-500 py-3 rounded-md"
        >
          Login w/ Apple Music
        </button> */}

          <button
            onClick={() => authorize()}
            className="text-sm bg-emerald-500 py-3 rounded-md"
          >
            Login w/ Spotify
          </button>
        </div>
      )}

      {user && (
        <>
          <main className="max-w-4xl w-full bg-gray-200 text-gray-900 p-5 flex flex-col justify-start">
            <div className=" flex justify-between items-center">
              <h3 className="text-xl font-semibold">
                Welcome,{" "}
                <span className="text-md text-gray-600">
                  {user["display_name"]}
                </span>
              </h3>
              <div className="flex items-center">
                <div className="w-64 text-end rounded-lg cursor-pointer ring-1 ring-transparent hover:ring-emerald-500 py-2 px-2 hover:shadow-lg flex items-center justify-end gap-1 hover:bg-emerald-50/50">
                  <h2 className="text-2xl font-bold">Playlist</h2>
                  <ChevronDownIcon className="w-5 h-5 mt-1 font-bold" />
                </div>
              </div>
            </div>
            <>
              <table className=" w-full flex flex-col gap-2 my-6">
                <thead>
                  <tr>
                    <th key="title">Title</th>
                    <th key="public">Public</th>
                    <th key="operations">Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {playlists &&
                    playlists.map((playlist) => {
                      console.log(playlist);
                      const { name, id } = playlist;
                      return (
                        <tr
                          key={id}
                          className=" py-2 flex justify-between items-center p-4 rounded-sm hover:shadow-md hover:ring-1 hover:ring-neutral-300 even:bg-emerald-500/10"
                        >
                          <td>
                            <h3 className="text-sm font-semibold">{name}</h3>
                          </td>
                          <td>
                            <p className="text-xs rounded-sm py-[2px] font-extralight px-1 ring-1 ring-emerald-500/70 bg-emerald-500">
                              {playlist["public"] ? "Public" : "Not Public"}
                            </p>
                          </td>
                          <td>
                            <div className="flex gap-2">
                              <div className="ring-1 rounded-sm  h-6 ring-neutral-400 flex items-center justify-center cursor-pointer  hover:shadow px-2 text-neutral-200 bg-red-600/90 font-light ">
                                <p className="text-xs">Transfer</p>
                              </div>
                              <div className="ring-1 rounded-sm w-6 h-6 ring-neutral-400 flex items-center justify-center cursor-pointer hover:bg-emerald-500/70  hover:shadow ">
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              </div>
                              <div className="ring-1 rounded-sm w-6 h-6 ring-neutral-400 flex items-center justify-center cursor-pointer hover:bg-red-500/70  hover:shadow ">
                                <TrashIcon className="w-4 h-4" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </>
            <h3 className="text-sm font-semibold mt-auto">Stamc</h3>
          </main>

          {topTacks && (
            <>
              <main className="flex flex-col gap-2 mb-4 bg-emerald-500 p-5 max-w-sm w-full">
                <h3 className="text-lg font-semibold">Top Tracks</h3>
                <hr className="mb-4" />
                {topTacks.map(({ name, artists, album, id }) => {
                  const image = album?.images[0].url;
                  // console.log(playlist);
                  return (
                    <div key={id} className="flex gap-2">
                      <div className="w-12 h-12 bg-red-200">
                        <img
                          className="w-full h-full object-contain"
                          src={image}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="capitalize font-semibold truncate h-6 w-[24ch]">
                          {name}
                        </h3>
                        <h4 className="font-sm text-gray-600 overflow-hidden h-6 w-[24ch]">
                          {artists?.map((artist) => artist.name).join(", ")}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </main>
            </>
          )}
        </>
      )}
    </main>
  );
}
