import { Routes, Route  } from "react-router-dom";
// import Catalog from "./Components/Catalog/Catalog";
import Header from "./Components/Header/Header";
import InnerPage from "./Components/innerPage/InnerPage";
import Render from "./Components/render/Render";

function App() {
 
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Render />} exact />
          <Route path="/innerpage:id" element={<InnerPage />}  />
        </Routes>
      
    </div>
  );
}

export default App;
