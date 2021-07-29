// Dependencies
import React, { useState } from "react";
import { Alert, Container } from "reactstrap";

// Local imports
import CustomNavbar from "./components/navbar/CustomNavbar";
import MonsterCard from "./components/monsterCard/MonsterCard";
import SearchBar from "./components/searchbar/SearchBar";
import monstersData from './support/monsters.json';

export default function App() {
  // State management for monster data
  const [monsters, _] = useState(monstersData)
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  return (
    <div>
      <div>
        <CustomNavbar />
        <Alert color="warning">
          This is still a work in progress, do not take this too seriously
        </Alert>
      </div>

      <Container>
        <SearchBar monsters={monsters} setFilteredMonsters={setFilteredMonsters} />
      </Container>

      <Container>
        {
          filteredMonsters.map((monster) => <MonsterCard {...monster} />)
        }
      </Container>
    </div>
  );
}
