import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/styled/MainPage";
import AllWorks from "./components/AllWorks";
import Layout from "./components/Layout";

// const router = createHashRouter(
//     createRoutesFromElements(<Route path="/" element={<MainPage />}></Route>)
// );

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage />} />
            <Route path="allworks" element={<AllWorks />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
