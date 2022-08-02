import TopFive from "../components/TopFive";
import RecsAndRevs from "../components/RecsAndRevs";

const Home = () => {
  return (
    <main>
      <section className="intro">
        <div className="introContainer">
          <h1>Welcome to Anime City</h1>
          <p>Where you can browse through popular anime and manga</p>
          <div className="rndbtn">
            <button className="randomAnime">Random Anime</button>
            <button className="randomManga">Random Manga</button>
          </div>
        </div>
      </section>
      <section className='animeSection'>
        <TopFive url={`https://api.jikan.moe/v4/top/anime`} />
      </section>
      <section className='mangaSection'>
        <TopFive url={`https://api.jikan.moe/v4/top/manga`} />
      </section>
      <section className='animeSection'>
        <RecsAndRevs url={`https://api.jikan.moe/v4/recommendations/anime`} />
      </section>
      <section className='animeSection'>
        <RecsAndRevs url={`https://api.jikan.moe/v4/recommendations/manga`} />
      </section>
    </main>
  );
};
export default Home;
