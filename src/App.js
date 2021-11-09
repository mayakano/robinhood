import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Newsfeed from './Newsfeed'
import Stats from './Stats.js'

function App() {
  return (
    <div className="App">
     {/* HEADER */}
      <div className="app__header">
      <Header />
      </div>
      <div className="app__body">
      <div className="app__container">
        <Newsfeed />
        <Stats />
      </div>
     </div>
     {/* BODY */}

    </div>
  );
}

export default App;
