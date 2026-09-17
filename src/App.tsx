import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

import About from "./components/About";
import CardContainer from "./components/CardContainer";
import CardDetails from "./components/CardDetails";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Explore from "./components/core-learning/components/Explore";

const App = () => (
  <div>
    <Header />
    <div className="w-full box-border px-4 sm:px-6 md:px-12 mt-5">
      <Outlet />
    </div>
    <Footer />
  </div>
);

const routerConfig = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <CardContainer /> },
        { path: "/about", element: <About /> },
        { path: "/details/:id", element: <CardDetails /> },
        { path: "/explore", element: <Explore /> },
      ],
    },
  ],
  {
    basename:
      window.location.hostname === "sendray.github.io"
        ? "/react-learning"
        : "/",
  },
);

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new globalThis.Error("The root element was not found.");
}

createRoot(rootElement).render(<RouterProvider router={routerConfig} />);
