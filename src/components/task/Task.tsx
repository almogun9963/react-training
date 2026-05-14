import { useContext } from "react";
import { type missionType } from "../../context/Task/TaskProvider";
import { MissionContext } from "../../context/Task/TaskContex";

interface TaskProps {
  mission: missionType;
}

const Task = ({ mission }: TaskProps) => {
  const { id, creationTime, isCompleted, name } = mission;
  const missionContext = useContext(MissionContext);

  const onClickCopmleteHandler = () => {
    const missions = missionContext?.missions;

    const filteredMissions: missionType[] = missions?.filter(
      (x) => x.id !== mission.id,
    );
    const missionCompleted: missionType = {
      id: id,
      creationTime: creationTime,
      isCompleted: !isCompleted,
      name: name,
    };
    const newMissions = [...filteredMissions, missionCompleted].sort(
      (a, b) => b.creationTime - a.creationTime,
    );

    missionContext.setMission(newMissions);
  };

  const onClickDeleteHandler = () => {
    const missions = missionContext?.missions;

    const filteredMissions: missionType[] = missions
      ?.filter((x) => x.id !== id)
      .sort((a, b) => b.creationTime - a.creationTime);

    missionContext.setMission(filteredMissions);
  };

  return (
    <div
      className={`missionComponent ${isCompleted ? "missionCompleted" : "missionUncompleted"}`}
    >
      <p>{name}</p>
      <div className="buttons-area">
        <button className="mission-button" onClick={onClickCopmleteHandler}>
          {isCompleted ? "UNCOMPLETE" : "COMPLETE"}
        </button>
        <button className="mission-button" onClick={onClickDeleteHandler}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Task;
