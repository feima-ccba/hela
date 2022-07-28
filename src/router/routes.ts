import { lazy } from "react";

const routes = [
  {
    path: "/",
    auth: false,
    component: lazy(() => import("@/pages/index")),
  },
];

export default routes;
