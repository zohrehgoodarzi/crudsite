import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Pages/Header/Menu";
import Home from "./Components/Pages/Home/Home";
import RouterProducts from "./Components/Pages/Prouducts/RouterProducts";
import RouterPosts from "./Components/Pages/Posts/RouterPosts";
import Footer from "./Components/Pages/Footer/Footer";
import Management from "./Components/Pages/Management/Management";
const App = () => {
  return (
  <BrowserRouter>
  <Menu/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/prouducts/*" element={<RouterProducts/>}/>
    <Route path="/posts/*" element={<RouterPosts/>}/>
    <Route path="/management" element={<Management/>}/>
  </Routes>
  <Footer/>
  
  </BrowserRouter>
   );
};
export default App;