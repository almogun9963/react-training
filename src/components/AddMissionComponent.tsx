import { useContext, useState } from "react";
import { useEffect } from "react";
import { type missionType } from "../context/MissionContex";
import { useCookies } from "react-cookie";
import { MissionContext } from "../context/MissionContexCreator";
import { TextField } from "@mui/material";

const AddMissionComponent = () => {
  const missionContext = useContext(MissionContext);
  const [cookies, setCookie] = useCookies(["missions"]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (cookies != null) {
      missionContext?.setMission(cookies.missions);
    }
  }, [cookies, missionContext]);

  const onClickHandler = () => {
    if (name == "") {
      alert("task must not be empty!");
      return;
    }

    if (missionContext) {
      const mission: missionType = {
        id: Date.now(),
        isCompleted: false,
        name: name,
      };
      let missions = missionContext.missions;

      if (
        missionContext.missions == undefined ||
        missionContext.missions == null
      ) {
        missions = [];
        missionContext.setMission(missions);
      }

      const newMissions = [...missions, mission].sort((a, b) => b.id - a.id);
      setCookie("missions", newMissions);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      />
      <button className="submit-button" type="submit" onClick={onClickHandler}>
        Submit task
      </button>
    </div>
  );
};

export default AddMissionComponent;
