import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MapComponent from './components/MapComponent';
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/map" element={<MapComponent />} />
          </Routes>
      </div>
      </Router>
      <Footer />
    </div>
  )
}

export default App;