/* eslint-disable jsx-a11y/anchor-is-valid */
import  React from "react";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Video from "./pages/Video";
import Layout from "./pages/Layout";
import Context from "./Context";

function App() {
  const url_base='http://localhost/my-videos/api/'
  const url = {
    Login:`${url_base}Login.php`,
    register:`${url_base}Register.php`,
    get_video:`${url_base}/video.php`,
    };
  return (
    <div className="App">
      <Context.Provider  value={url}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About />} />
                <Route path="video/:id" element={<Video />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
      
    </div>
  );
}
export default App;
/*<Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<About />} />
<Route path="video/:id" element={<Video />} />
</Routes>*/