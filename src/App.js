import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import About from "./components/About";
import CardDetails from "./components/CardDetails";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const routerConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <CardContainer />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/details/:id",
          element: <CardDetails />,
        },
      ],
    },
  ],
  {
    basename:
      window.location.hostname === "sendray.github.io" ? "/react-learning" : "/",
  },
);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routerConfig} />);
