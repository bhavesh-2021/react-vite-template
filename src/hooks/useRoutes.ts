import qs from "qs";

import { routePaths } from "@/constants";
import { generatePath, useNavigate } from "react-router";

export interface GotoRouteOptions {
  params?: Record<string, string | number>;
  query?: Record<string, any>;
}

export const useRoutes = () => {
  const navigate = useNavigate();

  const gotoRoutes = (pathName: string, options?: GotoRouteOptions) => {
    const { params = {}, query = {} } = options ?? {};

    let path = generatePath(pathName, params);

    const queryString = qs.stringify(query, {
      arrayFormat: "comma",
      encode: false,
    });

    path = queryString ? `${path}?${queryString}` : path;
    navigate(path);
  };

  return {
    ...routePaths,
    gotoHomePage: () => gotoRoutes(routePaths.HOME),
  };
};
