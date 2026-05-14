import { createContext } from "react";
import type { MissionContextType } from "./TaskProvider";

export const MissionContext = createContext<MissionContextType>({
  missions: [],
  setMission: () => {},
});
