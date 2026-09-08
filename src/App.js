import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

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

const root = createRoot(document.getElementById("root"));
root.render(<App />);
