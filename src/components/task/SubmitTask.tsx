import { TextField } from "@mui/material";
import { useContext, useState, type ChangeEvent } from "react";
import type { missionType } from "../../context/Task/TaskProvider";
import { MissionContext } from "../../context/Task/TaskContex";
import { v4 as uuidv4 } from "uuid";

const SubmitTask = () => {
  const missionContext = useContext(MissionContext);
  const { missions, setMission } = missionContext;
  const [name, setName] = useState("");

  const onSubmitHandler = () => {
    if (name == "") {
      alert("task must not be empty!");
      return;
    }

    if (missionContext) {
      const mission: missionType = {
        id: uuidv4(),
        creationTime: Date.now(),
        isCompleted: false,
        name: name,
      };
      let missionsFromContex = missions;

      if (missions == undefined || missions == null) {
        missionsFromContex = [];
        setMission(missionsFromContex);
      }

      const newMissions = [...missionsFromContex, mission].sort(
        (a, b) => b.creationTime - a.creationTime,
      );

      setMission(newMissions);
      setName("");
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value;
    setName(newValue);
  };

  return (
    <div className="submit-area">
      <TextField
        className="enter-task"
        variant="filled"
        label="enter your task:"
        onChange={onChange}
        value={name}
      />
      <button className="submit-button" type="submit" onClick={onSubmitHandler}>
        Submit task
      </button>
    </div>
  );
};

export default SubmitTask;
