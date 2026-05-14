import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { MissionContextProvider } from "./context/Task/TaskProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MissionContextProvider>
      <App />
    </MissionContextProvider>
  </StrictMode>,
);
