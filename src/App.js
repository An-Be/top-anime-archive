import Header from './components/Header';
// import TopAnime from './views/TopAnime';
// import TopManga from './views/TopManga';
import BrowserRouter from './components/BrowserRouter';
import AnimeProvider from './context/AnimeContext';
import MangaProvider from './context/MangaContext';
function App() {

  return (
    <div className="App">
      <AnimeProvider>
      <MangaProvider>
        <Header />
        <BrowserRouter />
        </MangaProvider>
      </AnimeProvider>
    </div>
  );
}

export default App;
