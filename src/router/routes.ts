import { lazy } from "react";
import type { LazyExoticComponent } from "react";
export interface RouteItem {
  children?: RouteItem[];
  element?: React.ReactNode;
  component: LazyExoticComponent<any>;
  path?: string;
}

const routes = [
  {
    path: "/",
    component: lazy(() => import("@/pages/index")),
  },
];

export default routes;
