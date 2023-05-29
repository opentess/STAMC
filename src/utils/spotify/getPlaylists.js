export default async function getPlaylists() {
  let accessToken = localStorage.getItem("access_token");

  const response = await fetch(
    "https://api.spotify.com/v1/me/playlists?limit=5",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );

  return await response.json();
}
