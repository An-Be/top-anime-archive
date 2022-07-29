import { Routes, Route } from "react-router-dom";
import TopManga from "../views/TopManga";
import TopAnime from "../views/TopAnime";
import Home from "../views/Home";

const BrowserRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/top-anime' element={<TopAnime />} />
            <Route path='/top-manga' element={<TopManga/>} />
      </Routes>
    );
}
export default BrowserRouter;