import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages';
import Aboutus from './pages/aboutus';
import Contact from './pages/contactus';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <Aboutus/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
