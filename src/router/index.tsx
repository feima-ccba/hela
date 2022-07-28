import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import routes, { RouteItem } from "./routes";

//根据路径获取路由
// const checkAuth = (routers:any, path:String)=>{
//   for (const data of routers) {
//     if (data.path==path) return data
//     if (data.children) {
//       const res:any = checkAuth(data.children, path)
//       if (res) return res
//     }
//   }
//   return null
// }

const generateRouter: (routers: RouteItem[]) => RouteObject[] = (routers) => {
  return routers.map((item: any) => {
    if (item.children) {
      const children = generateRouter(item.children);
      item.children = children;
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>
        <item.component />
      </Suspense>
    );
    return item;
  });
};

const Router = () => useRoutes(generateRouter(routes));
// const checkRouterAuth = (path:String)=>{
//   let auth = null
//   auth = checkAuth(routes,path)
//   return auth
// }
export default Router;
