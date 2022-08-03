import Header from './components/Header';
import BrowserRouter from './components/BrowserRouter';
import DataProvider from './context/DataContext';
import UserProvider from './context/UserContext';

function App() {

  return (
    <div className="App">
      <DataProvider>
        <UserProvider>
        <Header />
        <BrowserRouter />
        </UserProvider>
      </DataProvider>
    </div>
  );
}

export default App;
