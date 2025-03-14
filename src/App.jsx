import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TopLayout from "./Layouts/TopLayout";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewellery from "./pages/Jewellery";
import Electronic from "./pages/Electronic";
import ProductDetails from "./pages/ProductDetails";
import Discover from "./pages/Discover";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopLayout />}>
          <Route path="/" element={<Home />} />
          <Route path=":id" element={<ProductDetails/>} />
          <Route path="discover" element={<Discover />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="jewellery" element={<Jewellery />} />
          <Route path="electronic" element={<Electronic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
