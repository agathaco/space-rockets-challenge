import React, { useReducer, createContext, useEffect } from "react";
import { favReducer } from "./fav-reducer";
import {
  GET_LAUNCH_FAVS,
  GET_LAUNCHPAD_FAVS,
  FAV_LAUNCH,
  FAV_LAUNCHPAD,
  UNFAV_LAUNCH,
  UNFAV_LAUNCHPAD,
} from "./types";

const FavContext = createContext({
  favLaunches: [],
  favLaunchPads: [],
});

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favReducer, {
    favLaunches: [],
    favLaunchPads: [],
  });

  useEffect(() => {
    const localFavLaunches = JSON.parse(localStorage.getItem("favLaunches"));
    const localFavLaunchPads = JSON.parse(
      localStorage.getItem("favLaunchPads")
    );
    if (localFavLaunches)
      dispatch({ type: GET_LAUNCH_FAVS, launches: localFavLaunches });
    if (localFavLaunchPads)
      dispatch({ type: GET_LAUNCHPAD_FAVS, launchPads: localFavLaunchPads });
  }, []);

  const addLaunchFavs = (launch) => {
    dispatch({ type: FAV_LAUNCH, launch });
  };

  const removeLaunchFavs = (launch) => {
    dispatch({ type: UNFAV_LAUNCH, launch });
  };

  const addLaunchPadFavs = (launchPad) => {
    dispatch({ type: FAV_LAUNCHPAD, launchPad });
  };

  const removeLaunchPadFavs = (launchPad) => {
    dispatch({ type: UNFAV_LAUNCHPAD, launchPad });
  };

  return (
    <FavContext.Provider
      value={{
        state,
        addLaunchFavs,
        removeLaunchFavs,
        addLaunchPadFavs,
        removeLaunchPadFavs,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavContext;
