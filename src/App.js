// import Catalog from "./Components/Catalog/Catalog";
import { Route, Routes } from "react-router";
import Catalog from "./Components/Catalog/Catalog";
import InnerPage from "./Components/innerPage/InnerPage";
import Render from "./Components/render/Render";

function App() {
 
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Render />} exact />
          {/* <Route path="/innerpage" element={<Catalog />}  /> */}
          <Route path="/:postId" element={<InnerPage />}  />
        </Routes>
      
    </div>
  );
}

export default App;
