import TopFiveAnime from "../components/TopFiveAnime";
import TopFiveManga from "../components/TopFiveManga";
import RndAnimeBtn from "../components/RndAnimeBtn";
import RndMangaBtn from "../components/RndMangaBtn";
import Reccomendation from "../components/Reccomendations";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Home = () => {

  const { displayName } = useContext(UserContext);

  return (
    <main>
      <section className="intro">
        <div className="introContainer">
          <h1>Welcome to Anime Archive {displayName}</h1>
          <p>Where you can browse through popular anime and manga</p>
          <div className="rndbtn">
            <RndAnimeBtn />
            <RndMangaBtn />
          </div>
        </div>
      </section>
      <section className='animeSection'>
        <TopFiveAnime />
      </section>
      <section className='mangaSection'>
        <TopFiveManga />
      </section>
      <section className='animeSection'>
        <Reccomendation />
      </section>
    </main>
  );
};
export default Home;
