import {
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { MissionContext } from "./TaskContex";
import { useCookies } from "react-cookie";
export type missionType = {
  id: string;
  creationTime: number;
  isCompleted: boolean;
  name: string;
};

export type MissionContextType = {
  missions: missionType[];
  setMission: Dispatch<SetStateAction<missionType[]>>;
};

type MissionContextProviderProps = {
  children: ReactNode;
};

export const MissionContextProvider = ({
  children,
}: MissionContextProviderProps) => {
  const [cookies, setCookie] = useCookies(["missions"]);
  const [missions, setMission] = useState<missionType[]>(cookies.missions);

  useEffect(() => {
    setCookie("missions", missions);
  }, [missions, setCookie]);

  return (
    <MissionContext.Provider value={{ missions, setMission }}>
      {children}
    </MissionContext.Provider>
  );
};
