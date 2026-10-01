import './App.css';
import BitInteraction from './components/BitInteraction';
function App() {
  const year = new Date().getFullYear();
  return (
    <div className="App">
      <header>
        <h1>Binary Toy</h1>
        <p>An interactive tool for exploring binary numbers for education and fun</p>
      </header>
      <BitInteraction />
      <footer>
        <p>© {year} <a href="https://alternativereality.com">Alternative Reality Group</a>. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
