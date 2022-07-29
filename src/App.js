import Header from './components/Header';
// import TopAnime from './views/TopAnime';
// import TopManga from './views/TopManga';
import BrowserRouter from './components/BrowserRouter';
import DataProvider from './context/DataContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header />
        <BrowserRouter />
      </DataProvider>
    </div>
  );
}

export default App;
