import {
    Route,
    RouterProvider,
    createHashRouter,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/styled/MainPage";

const hashRouter = createHashRouter(
    createRoutesFromElements(<Route path="/" element={<MainPage />}></Route>)
);
const browserRouter = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<MainPage />}></Route>)
);

function App() {
    return <RouterProvider router={hashRouter} />;
    // return <RouterProvider router={browserRouter} />;
}

export default App;
