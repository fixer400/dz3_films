import './App.css';
import Stars from './Components/Stars';


function App() {
  const count = 2

  return (
    <div className="App">
      {(count >= 1 && count <= 5 && typeof(count) == "number") && <Stars count = {count}/>}
    </div>
  );
}

export default App;
