import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import MainPage from "./pages/styled/MainPage";

// const router = createHashRouter(
//     createRoutesFromElements(<Route path="/" element={<MainPage />}></Route>)
// );


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainPage/>} />
))
function App() {
    return <RouterProvider router={router} />;
    
}

export default App;
