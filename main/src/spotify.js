// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "12ee007cbf6e4ec988d64e5c7de1c097";
const redirectUri = "http://localhost:3000/";

//for permission
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//pull the Access token from url after authrization


export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});//reduces a massive amount
};
//comprise url for autorization includding all the
//endpoints, permission
//redirect id
//client id
//scopes permissions
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20" //space Ascii
)}&response_type=token&show_dialog=true`;
