import {
  GET_LAUNCH_FAVS,
  GET_LAUNCHPAD_FAVS,
  FAV_LAUNCH,
  FAV_LAUNCHPAD,
  UNFAV_LAUNCH,
  UNFAV_LAUNCHPAD,
} from "./types";

export function favReducer(state, action) {
  const { type, launch, launches, launchPad, launchPads } = action;
  let savedFavs = [];

  switch (type) {
    case GET_LAUNCH_FAVS:
      return {
        ...state,
        favLaunches: launches,
      };
    case GET_LAUNCHPAD_FAVS:
      return {
        ...state,
        favLaunchPads: launchPads,
      };
    case FAV_LAUNCH:
      savedFavs = [...state.favLaunches, launch];
      localStorage.setItem("favLaunches", JSON.stringify(savedFavs));
      return {
        ...state,
        favLaunches: savedFavs,
      };
    case UNFAV_LAUNCH:
      savedFavs = state.favLaunches.filter(
        (favLaunch) => favLaunch.flight_number !== launch.flight_number
      );
      localStorage.setItem("favLaunches", JSON.stringify(savedFavs));
      return {
        ...state,
        favLaunches: savedFavs,
      };
    case FAV_LAUNCHPAD:
      savedFavs = [...state.favLaunchPads, launchPad];
      localStorage.setItem("favLaunchPads", JSON.stringify(savedFavs));
      return {
        ...state,
        favLaunchPads: savedFavs,
      };
    case UNFAV_LAUNCHPAD:
      savedFavs = state.favLaunchPads.filter(
        (favLaunchPad) => favLaunchPad.id !== launchPad.id
      );
      localStorage.setItem("favLaunchPads", JSON.stringify(savedFavs));
      return {
        ...state,
        favLaunchPads: savedFavs,
      };
    default:
      return state;
  }
}
