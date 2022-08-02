import { Routes, Route } from "react-router-dom";
import TopManga from "../views/TopManga";
import TopAnime from "../views/TopAnime";
import Home from "../views/Home";
import AnimeRec from "../views/AnimeRec";
import MangaRec from "../views/MangaRec";

const BrowserRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-anime' element={<TopAnime />} />
            <Route path='/anime-reccomendations' element={<AnimeRec />} />
            <Route path='/top-manga' element={<TopManga/>} />
            <Route path='/manga-reccomendations' element={<MangaRec />} />
      </Routes>
    );
}
export default BrowserRouter;