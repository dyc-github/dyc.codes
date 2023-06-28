import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./routes/home";
import Article from "./routes/article";
import Work from "./routes/work";
import Error from "./routes/error";
import Contact from "./routes/contact";
import Extracurriculars from "./routes/extracurriculars";

const getMarkdownFile = (articleID: string | undefined) => {
  return import(`./markdown/${articleID}.md`)
    .then((res) => {
      return fetch(res.default)
        .then((res) => res.text())
        .then((res) => res);
    })
    .catch((err) => {
      console.log(err);
      throw new Response("Not Found", { status: 404 });
    });
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/extracurriculars",
        element: <Extracurriculars />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/:parentPage?/article/:articleID",
        element: <Article />,
        errorElement: <Error />,
        loader: async ({ params }) => getMarkdownFile(params.articleID),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
