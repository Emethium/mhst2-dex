import React from "react";
import { Alert, Container } from "reactstrap";

import CustomNavbar from "./components/navbar/CustomNavbar";
import MonsterCard from "./components/monsterCard/MonsterCard";

export default function App() {
  // We are fetching assets from Kiranico just for the time being. Sorry!
  const monsters = [
    {
      id: 1,
      name: "Anjanath",
      type: "Power",
      regionFound: "Loloska Forest",
      portraitURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/micons/micon136.png",
      eggURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/eggs/buddy_140.png"
    },
    {
      id: 2,
      name: "Apceros",
      type: "Power",
      regionFound: "Alcala Highlands",
      portraitURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/micons/micon71.png",
      eggURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/eggs/buddy_42.png"
    },
    {
      id: 3,
      name: "Aptonoth",
      type: "Power",
      regionFound: "North Kamuna Cape",
      portraitURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/micons/micon72.png",
      eggURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/eggs/buddy_12.png"
    },
    {
      id: 5,
      name: "Arzuros",
      type: "Power",
      regionFound: "Alcala Highlands",
      portraitURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/micons/micon7.png",
      eggURL: "https://cdn.kiranico.net/file/kiranico/mhstories-web/eggs/buddy_20.png"
    }
  ]

  return (
    <div>
      <div>
        <CustomNavbar />
        <Alert color="warning">
          This is still a work in progress, do not take this too seriously
        </Alert>
      </div>

      <Container>
        {
          monsters.map((monster) => <MonsterCard {...monster} />)
        }
      </Container>
    </div>
  );
}
