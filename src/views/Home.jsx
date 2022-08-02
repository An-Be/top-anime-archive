// import Top5Anime from "../components/Top5Anime";
// import Top5Manga from "../components/Top5Manga";
// import TwoMangaRec from "../components/TwoMangaRec";
// import TwoAnimeRec from "../components/TwoAnimeRec";
import TopFive from "../components/TopFive";
import RecsAndRevs from "../components/RecsAndRevs";

const Home = () => {

    return(
        <div>
            <TopFive url={`https://api.jikan.moe/v4/top/anime`} />
            <TopFive url={`https://api.jikan.moe/v4/top/manga`} />
            <RecsAndRevs url={`https://api.jikan.moe/v4/recommendations/anime`} />
            <RecsAndRevs url={`https://api.jikan.moe/v4/recommendations/manga`} />
        </div>
    )
}
export default Home;