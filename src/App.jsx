import { useState } from "react";
import Games from "./components/Games";
import Hero from "./components/Hero";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const games = [
    { name: "GTA VI", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/GTA%20VI.png?raw=true" },
    { name: "Fifa 25", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/fifa.png?raw=true" },
    { name: "God of War", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/God%20of%20War.png?raw=true" },
    { name: "Suicide Squad", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/sucide%20squad.png?raw=true" },
    { name: "Witcher III", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/Witcher.png?raw=true" },
    { name: "Valorant", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/Valorant.png?raw=true" },
    { name: "NBA 2k25", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/NBA2k25.png?raw=true" },
    { name: "UFC 5", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/ufc.png?raw=true" },
    { name: "RDR2", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/RDR2.png?raw=true" },
    { name: "Black Myth", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/black%20myth.png?raw=true" },
    { name: "Indiana Jones", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/indiana%20jones.png?raw=true" },
    { name: "Super Mario", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/Super%20Mario.png?raw=true" },
    { name: "Uncharted 4", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/uncharted.png?raw=true" },
    { name: "Last of Us", src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/last%20of%20us.png?raw=true" },
    {
      name: "GOG",
      src: "https://github.com/utsavarch/GamesFilterReact/blob/main/src/img/Guardians%20of%20the%20Galaxy.png?raw=true",
    },
  ];

  const handlesearch = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchInput)
  );

  return (
    <div>
      <Hero onSearch={handlesearch} />
      <div className="block m-5 p-2 sm:flex sm:m-5 sm:p-2 sm:gap-[20px] sm:flex-wrap sm:justify-evenly">
        {filteredGames.map((game, index) => (
          <Games key={index} name={game.name} src={game.src} />
        ))}
      </div>
    </div>
  );
}

export default App;
