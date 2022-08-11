import { Routes, Route } from "react-router-dom";
import TopManga from "../views/TopManga";
import TopAnime from "../views/TopAnime";
import Home from "../views/Home";
import RandomAnime from "../views/RandomAnime";
import RandomManga from "../views/RandomManga";
import SeasonalAnime from "../views/SeasonalAnime";
import Login from "../views/Login";
import List from "../views/List";
import AddToAnimeList from "../views/AddToAnimeList";
import Anime from "../views/Anime";

const BrowserRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-anime' element={<TopAnime />} />
            <Route path='/top-manga' element={<TopManga/>} />
            <Route path='/random-anime' element={<RandomAnime />} />
            <Route path='/random-manga' element={<RandomManga />} />
            <Route path='/season-anime' element={<SeasonalAnime />} />
            <Route path='/login' element={<Login />} />
            <Route path='/list' element={<List />} />
            <Route path='/add-to-list' element={<AddToAnimeList />} />
            <Route path='/anime' element={<Anime />} />
      </Routes>
    );
}
export default BrowserRouter;