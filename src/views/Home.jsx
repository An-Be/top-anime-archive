import TopFiveAnime from "../components/TopFiveAnime";
import TopFiveManga from "../components/TopFiveManga";
import RndAnimeBtn from "../components/RndAnimeBtn";
import RndMangaBtn from "../components/RndMangaBtn";
import TwoAnimeRec from "../components/TwoAnimeRec";
import TwoMangaRec from "../components/TwoMangaRec";

const Home = () => {
  return (
    <main>
      <section className="intro">
        <div className="introContainer">
          <h1>Welcome to Anime Archive</h1>
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
        <TwoAnimeRec />
      </section>
      <section className='animeSection'>
        <TwoMangaRec />
      </section>
    </main>
  );
};
export default Home;
