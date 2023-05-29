// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

export default async function getProfile() {
  let accessToken = localStorage.getItem("access_token");

  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
    {
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }
  );

  return await response.json();
}
