import { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../src/Player";
import { useDataLayervalue } from "./DataLayer";

//resposible for interactinn btw spotify and react app
const spotify = new SpotifyWebApi();

function App() {
  //states :- short term memory storage
  // const [token, setToken] = useState(null);

  const [token, dispatch] = useDataLayervalue();

  //runs code based on given condition
  //to keep an eye on that window
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = getTokenFromUrl();

    if (_token) {
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })

      // setToken(_token);

      spotify.setAccessToken(_token); //given access token to spotify

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }
  }, []);

  return  <div className="app">
  {!token && <Login />}
  {token && <Player/>}
</div>
}

export default App;
