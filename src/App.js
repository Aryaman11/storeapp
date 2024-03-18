import './App.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages';
import Aboutus from './pages/aboutus';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/aboutus",
    element: <Aboutus/>
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
