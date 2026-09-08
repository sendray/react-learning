import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import About from "./components/About";
import Error from "./components/Error";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <CardContainer />
      </div>
    </div>
  );
};

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
