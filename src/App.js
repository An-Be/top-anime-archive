import Header from './components/Header';
import TopAnime from './views/TopAnime';
import SearchTopAnime from './views/SearchTopAnime';
import TopManga from './views/TopManga';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/top-anime' element={<TopAnime />} />
        <Route path='/search-top-anime' element={<SearchTopAnime/>} />
        <Route path='/top-manga' element={<TopManga/>} />
      </Routes>
    </div>
  );
}

export default App;
