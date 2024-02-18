import Index from "./Pages/Index/Index";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/404/404";


let routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
 
  {
    element: <Layout />,
    children: [
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
