import { Routes, Route } from "react-router-dom";
import TopManga from "../views/TopManga";
import TopAnime from "../views/TopAnime";
import Home from "../views/Home";
import AnimeRev from "../views/AnimeRev";
import RandomAnime from "../views/RandomAnime";
import RandomManga from "../views/RandomManga";
import SeasonalAnime from "../views/SeasonalAnime";
import Login from "../views/Login";

const BrowserRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-anime' element={<TopAnime />} />
            <Route path='/anime-reviews' element={<AnimeRev />} />
            <Route path='/top-manga' element={<TopManga/>} />
            <Route path='/random-anime' element={<RandomAnime />} />
            <Route path='/random-manga' element={<RandomManga />} />
            <Route path='/season-anime' element={<SeasonalAnime />} />
            <Route path='/login' element={<Login />} />

      </Routes>
    );
}
export default BrowserRouter;