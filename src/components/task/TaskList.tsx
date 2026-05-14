import { useContext } from "react";
import MissionComponent from "./Task";
import { type missionType } from "../../context/Task/TaskProvider";
import { MissionContext } from "../../context/Task/TaskContex";
import SubmitTask from "./SubmitTask";

const TaskList = () => {
  const missionContext = useContext(MissionContext);

  return (
    <>
      <SubmitTask></SubmitTask>
      {missionContext?.missions?.map((mission: missionType) => (
        <MissionComponent key={mission.id} mission={mission}></MissionComponent>
      ))}
    </>
  );
};

export default TaskList;
