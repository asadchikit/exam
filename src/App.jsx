import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";
import { All } from "./pages/All/All"
import { YourCart } from "./pages/Yourcart/Yourcort";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/all" element={<All />} />
        <Route path="/yourcrad" element={<YourCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
