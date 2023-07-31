import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import WorksAll from "./components/WorksAll";
import Work from "./components/Work";
import Layout from "./components/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="allworks" element={<WorksAll />} />
            <Route path="allworks/:id" element={<Work />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
