import Index from "./Pages/Index/Index";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/404/404";
import SimChargee from "./Pages/SimChargee/SimChargee";
import Orders from "./Pages/Index/Orders/Orders";


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
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
   {
    element: <Layout />,
    children: [
      {
        path: "/simChargee",
        element: <SimChargee />,
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
