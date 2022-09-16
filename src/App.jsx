import './App.css';
import Navbar from './components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Buzon from './pages/Buzon';

function App() {

  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/buzon' element={<Buzon/>}/>
        </Routes>
    </div>
  )
}

export default App
