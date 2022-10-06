import { useRef, useEffect } from "react";
import "./App.css";
import "./sunbird/styles.css";
import "./sunbird/sunbird-quml-player";
import { playerConfig } from "./data";

function App() {
  const sunbirdQumlPlayerRef = useRef(null);
  // window.jQuery = $;
  window.questionListUrl = "https://staging.sunbirded.org/api/question/v1/list";
  useEffect(() => {
    const playerElement = sunbirdQumlPlayerRef.current;
    const handlePlayerEvent = (event) => {
      console.log("Player Event", event.detail);
    };
    const handleTelemetryEvent = (event) => {
      console.log("Telemetry Event", event.detail);
    };

    playerElement.addEventListener("playerEvent", handlePlayerEvent);
    playerElement.addEventListener("telemetryEvent", handleTelemetryEvent);

    return () => {
      playerElement.removeEventListener("playerEvent", handlePlayerEvent);
      playerElement.removeEventListener("telemetryEvent", handleTelemetryEvent);
    };
  }, []);
  return (
    <div className="App">
      <sunbird-quml-player
        player-config={JSON.stringify(playerConfig)}
        ref={sunbirdQumlPlayerRef}
      ></sunbird-quml-player>
    </div>
  );
}

export default App;
