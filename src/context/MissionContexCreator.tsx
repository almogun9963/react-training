import { createContext } from "react";
import type { MissionContextType } from "./MissionContex";

export const MissionContext = createContext<MissionContextType>({
  missions: [],
  setMission: () => {},
});
