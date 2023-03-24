import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext'


import WebsiteLayout from "./layouts/WebsiteLayout";
import LoginLayout from "./layouts/LoginLayout";

import Login from "./pages/Login";
import Signup from './pages/Signup'
import Dashboard from "./components/Dashboard";
import Control from "./pages/Control";


const App = () => {
    const user = true;

    return (<BrowserRouter>
        {user ?
            <Routes>
                <Route path="/" element={<WebsiteLayout />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="control" element={<Control />} />
                    <Route path="data" element={<Dashboard />} />
                    <Route path="diagnose" element={<Dashboard />} />
                    <Route path="notification" element={<Dashboard />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes> :
            <LoginLayout>
                <Routes>
                    <Route path="/" element={<Navigate replace to="login" />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Routes>
            </LoginLayout>
        }
    </BrowserRouter>)
}

export default App;
