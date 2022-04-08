import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Navigation from './components/Navigation'
import DropMenu from './components/DropMenu'
import VectorDisplay from './components/VectorDisplay';

function App() {
  return (
    <div className='app'>
      <Header>
        <VectorDisplay/>
        <Navigation/>
        <DropMenu/>
      </Header>
  </div>
  );
}

export default App;
