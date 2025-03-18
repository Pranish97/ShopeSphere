import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import TopLayout from "./Layouts/TopLayout";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Jewellery from "./pages/Jewellery";
import Electronic from "./pages/Electronic";
import ProductDetails from "./pages/ProductDetails";
import Discover from "./pages/Discover";
import {loader as productLoader} from "./pages/Home"
import Error from "./Components/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<TopLayout />} errorElement={<Error />} >
        <Route path="/" element={<Home />} loader={productLoader} />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="discover" element={<Discover />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="jewellery" element={<Jewellery />} />
        <Route path="electronic" element={<Electronic />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
