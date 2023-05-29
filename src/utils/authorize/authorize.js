import generateRandomString from "./generateRandomString";
import generateCodeChallenge from "./generateCodeChallenge";

const clientId = process.env.NEXT_PUBLIC_CLIENTID;
const redirect_uri = process.env.NEXT_PUBLIC_REDIRECT_URI;
export const authorize = async () => {
  let codeVerifier = generateRandomString(128);

  generateCodeChallenge(codeVerifier).then((codeChallenge) => {
    let state = generateRandomString(16);
    let scope =
      "user-read-private user-read-email user-top-read playlist-read-private";

    localStorage.setItem("code_verifier", codeVerifier);

    let args = new URLSearchParams({
      response_type: "code",
      client_id: clientId,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
    });

    window.location.assign("https://accounts.spotify.com/authorize?" + args);
  });
};
const printCode = () => {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");
  console.log(code);
};
