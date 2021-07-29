import React, { useState } from "react";
import { Form, Label, Tooltip, Input } from "reactstrap";

import { Monster } from "../../domain";

export default function SearchBar(props: Record<string, any>) {
  // State management for search tooltip
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Form>
      <Label for="search">
        <span style={{ textDecoration: "underline", color: "brown" }} id="searchTooltip"> Search monsties:</span>
      </Label>
      <Tooltip placement="right" isOpen={tooltipOpen} target="searchTooltip" toggle={toggle}>
        You can prepend the "name:"", "type:" or "regionFound:" keys to do advanced searches
    </Tooltip>
      <Input type="text" name="search" id="search" placeholder="type a name or advanced search here" onChange={(event) => handleSearch(event, props.monsters, props.setFilteredMonsters)} />
    </Form>
  )
}

function handleSearch(event: any, monsters: Monster[], setter: any): void {
  const searchValue: string = event.target.value.toLowerCase();
  const searchData = generateSearchDataFromInput(searchValue);

  const result = monsters.filter((monster) => filterMonster(monster, searchData))
  console.log(result)
  setter(result)
}

function generateSearchDataFromInput(input: string): Record<string, string> {
  if (!input.includes(":")) {
    return { name: input }
  }

  const fields = input.split(',');
  let data: Record<string, string> = {};

  fields.map(field => {
    const [key, value] = field.split(":");
    data[key.trim()] = value?.trim();
  })

  return data;
}

function filterMonster(monster: Monster, searchData: Record<string, string>): boolean {
  const { name, type, region } = searchData;

  if (name === '') {
    return true;
  }

  return (
    (name ? monster.name.toLowerCase().includes(name?.toLowerCase()) : true)
    && (type ? monster.type.toLowerCase().includes(type?.toLowerCase()) : true)
    && (region ? monster.regionFound.toLowerCase().includes(region?.toLowerCase()) : true)
  )
    ? true : false
}