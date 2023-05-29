import {
    Route,
    RouterProvider,
    createHashRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/styled/MainPage";

// const router = createHashRouter(
//     createRoutesFromElements(<Route path="/" element={<MainPage />}></Route>)
// );

function App() {
    // return <RouterProvider router={router} />;
    return (
        <MainPage />
    )
}

export default App;
