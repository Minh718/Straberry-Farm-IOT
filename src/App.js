import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { useGlobalContext } from "./context";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Dashboard from "./components/Dashboard";
function App() {
  const {user} = useGlobalContext();
  const router = createBrowserRouter(createRoutesFromElements(
    user ?(
<Route path="/" element={<Home/>}>
  <Route path="/" element={<Dashboard/>}/>
</Route>
    ): (
<Route path="/" element={<Login/>}/>
      )
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
