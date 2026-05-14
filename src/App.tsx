import AddMissionComponent from "./components/AddMissionComponent";
import TableComponent from "./components/TableComponent";
import "./App.css";
import { MissionContextProvider } from "./context/MissionContex";

function App() {
  return (
    <div>
      <MissionContextProvider>
        <AddMissionComponent />
        <TableComponent />
      </MissionContextProvider>
    </div>
  );
}

export default App;
