import React from "react";
import { createRoot } from "react-dom/client";

const appContainer = React.createElement("div", { id: "app-container" }, [
  React.createElement("div", { id: "container1" }, [
    React.createElement("h1", { id: "heading1" }, "I'am a h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I'am a h2 tag"),
  ]),
  React.createElement("div", { id: "container2" }, [
    React.createElement("h1", { id: "heading1" }, "I'am a h1 tag"),
    React.createElement("h2", { id: "heading2" }, "I'am a h2 tag"),
  ]),
]);

const root = createRoot(document.getElementById("root"));
root.render(appContainer);
