import { useState, useEffect } from "react";
import getProfile from "./getProfile";
import getTopTracks from "./getTopTracks";
import getPlaylists from "./getPlaylists";

const clientId = process.env.NEXT_PUBLIC_CLIENTID;
const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI;
function useInit() {
  const [user, setUser] = useState();
  const [topTacks, setTopTacks] = useState([{}]);
  const [playlists, setPlaylists] = useState([{}]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("You are on the browser,You are good to go");
    } else {
      console.log("You are on the server,Cannot execute");
    }

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get("code");

    let codeVerifiers = localStorage.getItem("code_verifier");

    let body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifiers,
    });

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        getProfile().then((data) => {
          console.log(data);
          setUser(data);
        });

        getTopTracks().then((data) => {
          setTopTacks(data.items);
          console.log(data.items);
        });

        getPlaylists().then((data) => {
          setPlaylists(data.items);
          console.log(data.items);
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  return { user, topTacks, setUser, setTopTacks, playlists, setPlaylists };
}
export default useInit;
