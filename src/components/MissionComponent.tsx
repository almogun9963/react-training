import { useContext } from "react";
import { type missionType } from "../context/MissionContex";
import { useCookies } from "react-cookie";
import { MissionContext } from "../context/MissionContexCreator";

const MissionComponent = (mission: missionType) => {
  const missionContext = useContext(MissionContext);
  const [, setCookie] = useCookies(["missions"]);

  const onClickCopmleteHandler = () => {
    const missions = missionContext?.missions;

    const filteredMissions: missionType[] = missions?.filter(
      (x) => x.id !== mission.id,
    );
    const missionCompleted: missionType = {
      id: mission.id,
      isCompleted: !mission.isCompleted,
      name: mission.name,
    };
    const newMissions = [...filteredMissions, missionCompleted].sort(
      (a, b) => b.id - a.id,
    );

    missionContext?.setMission(newMissions);
    setCookie("missions", newMissions);
  };

  const onClickDeleteHandler = () => {
    const missions = missionContext?.missions;

    const filteredMissions: missionType[] = missions
      ?.filter((x) => x.id !== mission.id)
      .sort((a, b) => b.id - a.id);

    missionContext?.setMission(filteredMissions);
    setCookie("missions", filteredMissions);
  };

  return (
    <div className="missionComponent">
      {mission.isCompleted ? (
        <div className="missionCompleted">
          <p>Task: {mission.name}</p>
          <div className="buttons-area">
            <button className="mission-button" onClick={onClickCopmleteHandler}>
              UNCOMPLETE
            </button>
            <button className="mission-button" onClick={onClickDeleteHandler}>
              DELETE
            </button>
          </div>
        </div>
      ) : (
        <div className="missionUncompleted">
          <p>Task: {mission.name}</p>
          <div className="buttons-area">
            <button className="mission-button" onClick={onClickCopmleteHandler}>
              COMPLETE
            </button>

            <button className="mission-button" onClick={onClickDeleteHandler}>
              DELETE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MissionComponent;
