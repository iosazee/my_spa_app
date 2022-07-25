import {Home, ShutterSpeed, Aperture, ISO, ContactUs} from './components/pages.js';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navigation from './components/navigation.js';
import {wrapperStyle} from './components/styles.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App" style={wrapperStyle.wrapper}>
      <Navigation />
      <h1>Camera Tips</h1>
      <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/shutterspeed' element={<ShutterSpeed />} />
      <Route exact path='/aperture' element={<Aperture />} />
      <Route exact path='/iso' element={<ISO />} />
      <Route exact path='/contactus' element={<ContactUs />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
