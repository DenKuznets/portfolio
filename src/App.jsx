import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AllWorks from "./components/AllWorks";
import WorkModal from "./components/WorkModal";
import Layout from "./components/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="allworks" element={<AllWorks />} />
            <Route path="allworks/:id" element={<WorkModal />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
