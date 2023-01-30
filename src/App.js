
import './App.css';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Wish from './components/Wish';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      < Hello/>
      < Greet greeting ='this is msg from props(class)'/>
      < Wish name='mark' lastname='jhon' />
      < Counter/>
    </div>
  );
}

export default App;
