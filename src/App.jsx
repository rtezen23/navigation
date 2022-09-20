import './App.css';
import Navbar from './components/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Buzon from './pages/Buzon';
import { Slider } from './components/Slider';
import './components/slider.css';

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
      <div className='containerStyles'>
        <Slider slides={slides}/>
      </div>
        <Routes>
          <Route path='/buzon' element={<Buzon/>}/>
        </Routes>
    </div>
  )
}

export default App
