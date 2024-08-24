import { useState } from "react";
import Games from "./components/Games";
import Hero from "./components/Hero";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const games = [
    { name: "GTA VI", src: "./src/img/GTA VI.png" },
    { name: "Fifa 25", src: "./src/img/fifa.png" },
    { name: "God of War", src: "./src/img/God of War.png" },
    { name: "Suicide Squad", src: "./src/img/sucide squad.png" },
    { name: "Witcher III", src: "./src/img/Witcher.png" },
    { name: "Valorant", src: "./src/img/Valorant.png" },
    { name: "NBA 2k25", src: "./src/img/NBA2k25.png" },
    { name: "UFC 5", src: "./src/img/ufc.png" },
    { name: "RDR2", src: "./src/img/RDR2.png" },
    { name: "Black Myth", src: "./src/img/black myth.png" },
    { name: "Indiana Jones", src: "./src/img/indiana jones.png" },
    { name: "Super Mario", src: "./src/img/Super Mario.png" },
    { name: "Uncharted 4", src: "./src/img/uncharted.png" },
    { name: "Last of Us", src: "./src/img/last of us.png" },
    {
      name: "GOG",
      src: "src/img/Guardians of the Galaxy.png",
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
