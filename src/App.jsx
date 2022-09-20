import './App.css';
import Navbar from './components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Buzon from './pages/Buzon';
import {BuzonTable} from './pages/BuzonTable';
import './components/slider.css';
import ProtectedRoutes from './components/ProtectedRoutes';
import { Home } from './pages/Home';

const slides = [
  { url: 'https://c4.wallpaperflare.com/wallpaper/435/542/549/javascript-google-node-js-html-microsoft-visual-studio-hd-wallpaper-preview.jpg', title: 'first image'},
  { url: 'https://c4.wallpaperflare.com/wallpaper/20/607/583/flatdesign-github-html-javascript-wallpaper-preview.jpg', title: 'second image'},
  { url: 'https://www.xtrafondos.com/wallpapers/paisaje-de-lago-al-atardecer-6253.jpg', title: 'third image'},
  { url: 'https://fondosmil.com/fondo/2254.jpg', title: 'fourth image'},
]

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <div className='containerStyles'>
        <Slider slides={slides}/>
      </div> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/buzon' element={<Buzon/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/buzonData' element={<BuzonTable/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App
