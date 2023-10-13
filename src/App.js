import './css/App.css';
import Header from './Сomponents/Header/Header.jsx'
import Main from './Сomponents/Main/Main.jsx'
import Popular from './Сomponents/Popular/Popular';
import Footer from './Сomponents/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Popular/>
      <Footer/>
    </div>
  );
}

export default App;
