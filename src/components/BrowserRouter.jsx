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
import AddToMangaList from "../views/AddToMangaList";
import Profile from "../views/Profile";

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
            <Route path='/add-to-anime-list' element={<AddToAnimeList />} />
            <Route path='/add-to-manga-list' element={<AddToMangaList />} />
            <Route path='/anime' element={<Anime />} />
            <Route path='/profile' element={<Profile />} />
      </Routes>
    );
}
export default BrowserRouter;