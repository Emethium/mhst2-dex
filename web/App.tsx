import React from "react";
import { Alert, Container, Row } from "reactstrap";

import CustomNavbar from "./components/navbar/CustomNavbar";
import MonsterCard from "./components/monsterCard/MonsterCard";

export default function App() {
  const monster = {
    id: 1,
    name: "Anjanath",
    type: "Power",
    regionFound: "Loloska Forest",
    portraitURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/micons/micon136.png",
    eggURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/eggs/buddy_140.png"
  }

  return (
    <div>
      <div>
        <CustomNavbar />
        <Alert color="warning">
          This is still a work in progress, do not take this too seriously
        </Alert>
      </div>

      <div>
        <MonsterCard {...monster} />
      </div>
    </div>
  );
}
