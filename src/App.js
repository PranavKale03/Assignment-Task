import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import MyCart from './container/MyCart/MyCart';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyCart />
    </div>
  );
}

export default App;
