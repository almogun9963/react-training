import { useContext } from "react";
import MissionComponent from "./MissionComponent";
import { type missionType } from "../context/MissionContex";
import { MissionContext } from "../context/MissionContexCreator";

const TableComponent = () => {
  const missionContext = useContext(MissionContext);

  return (
    <ul>
      {missionContext?.missions?.map((mission: missionType) => (
        <MissionComponent
          key={mission.id}
          id={mission.id}
          isCompleted={mission.isCompleted}
          name={mission.name}
        ></MissionComponent>
      ))}
    </ul>
  );
};

export default TableComponent;
