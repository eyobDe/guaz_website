import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Network from "./pages/Network";
import InternationalRelocation from "./pages/InternationalRelocation";
import Blog from "./pages/Blog";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/network" element={<Network />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/international-relocation" element={<InternationalRelocation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
