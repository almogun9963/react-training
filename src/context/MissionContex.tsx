import { useState, type ReactNode } from "react";
import { MissionContext } from "./MissionContexCreator";
export type missionType = {
  id: number;
  isCompleted: boolean;
  name: string;
};

export type MissionContextType = {
  missions: missionType[];
  setMission: React.Dispatch<React.SetStateAction<missionType[]>>;
};

type MissionContextProviderProps = {
  children: ReactNode;
};

export const MissionContextProvider = ({
  children,
}: MissionContextProviderProps) => {
  const [missions, setMission] = useState<missionType[]>([]);

  return (
    <MissionContext.Provider value={{ missions, setMission }}>
      {children}
    </MissionContext.Provider>
  );
};
