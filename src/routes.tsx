import { createBrowserRouter } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper />,
    children: [{ index: true, element: <Home /> }],
  },
]);

export default routes;
