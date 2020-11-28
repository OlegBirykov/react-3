import './App.css';
import Stars from './task1/Stars';

function App() {
  return (
    <div> 
      <div className="task-1">  
        <Stars />
        <Stars count={1} />
        <Stars count={2} />
        <Stars count={3} />
        <Stars count={4} />
        <Stars count={5} />
        <Stars count={4.5} />
      </div>
      <div className="task-2">
      </div>
      <div className="task-3">
      </div>
    </div>
  );
}

export default App;
