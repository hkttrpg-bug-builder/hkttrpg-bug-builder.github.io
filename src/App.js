import './App.css';
import PoolPresentational from './Pools/PoolPresentational'

function App() {
  return (
    <div className="App">
      <PoolPresentational name="Heart" />
      <PoolPresentational name="Soul" />
      <PoolPresentational name="Stamina" />
    </div>
  );
}

export default App;
