// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// import { useGlobalContext } from "./context";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Dashboard from "./components/Dashboard";
// import Datalog from "./components/Datalog/Datalog";
// function App() {
//   const {user} = useGlobalContext();
//   const router = createBrowserRouter(createRoutesFromElements(
//     user ?(
// <Route path="/" element={<Home/>}>
//   <Route path="/" element={<Dashboard/>}/>
//   <Route path="/datalog" element={<Datalog/>}/>

// </Route>
//     ): (
// <Route path="/" element={<Login/>}/>
//       )
//   ))
//   return (
//     <RouterProvider router={router}/>
//   );
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'


import WebsiteLayout from "./layouts/WebsiteLayout";
import LoginLayout from "./layouts/LoginLayout";

import Login from "./pages/Login";
import Signup from './pages/Signup'
import Dashboard from "./components/Dashboard";
import Control from "./pages/Control";
import Datalog from "./components/Datalog/Datalog";
import { useGlobalContext } from './context/index';
import client from './utils/adafruit';

const App = () => {
    const { user } = useAuthContext();
    const { setTemperature, setLightIntensity, setHumidity, setLightBtn, setPumperBtn, setAirBtn } = useGlobalContext()
    client.on('message', (topic, message, packet) => {
        console.log("Received '" + message + "' on '" + topic + "'");
        switch (topic.split("/")[2]) {
            case 'humidity-sensor':
                setHumidity((message.toString()));
                break;
            case 'temperature-sensor':
                setTemperature((message.toString()));
                break;
            case 'light-sensor':
                setLightIntensity((message.toString()));
                break;
            case 'fan':
                setAirBtn((message.toString()));
                break;
            case 'pumper':
                setPumperBtn((message.toString()));
                break;
            case 'led':
                setLightBtn((message.toString()));
                break;
            default:
                break;
        }
    });
    return (<BrowserRouter>
        {user ?
            <Routes>
                <Route element={<WebsiteLayout />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="control" element={<Control />} />
                    <Route path="datalog" element={<Datalog />} />
                    <Route path="diagnose" element={<Dashboard />} />
                    <Route path="notification" element={<Dashboard />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes> :

            <Routes>
                <Route element={<LoginLayout />}>
                    <Route path="/" element={<Navigate to="/login" />} />
                    <Route path='login' element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        }
    </BrowserRouter >)
}

export default App;
