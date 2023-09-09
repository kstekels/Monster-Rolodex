import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/fetch.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("render");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(filterMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder={"search monsters"}
        className={"monsters-search-box"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
