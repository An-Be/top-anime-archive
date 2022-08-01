import Header from './components/Header';
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
