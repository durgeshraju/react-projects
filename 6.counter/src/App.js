import { CounterProvider } from './Context/CounterContext';
import Counter from './components/Counter';
import './App.css'

const App = () => {
  return (
    <main>
      <div className="container">        
          <CounterProvider>
            <Counter title="Counter" />
          </CounterProvider>
      </div>
    </main>
  );
}

export default App;
