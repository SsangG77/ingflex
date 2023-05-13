//Components
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Series from "./Components/Series";
import Game from "./Components/Game";
import Other from "./Components/Other";

//route
import { Switch, Route, Routes } from "react-router-dom";

//css
import { app_style } from "./Css/style";

function App() {
  return (
    <div className="App" style={app_style.main}>
      <Banner />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/series" element={<Series />} />
        <Route path="/game" element={<Game />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
