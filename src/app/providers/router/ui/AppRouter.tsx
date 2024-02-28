import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

// const MainPageLazy = lazy(() => import("pages/MainPage"));
// const AboutPageLazy = lazy(() => import("@/pages/AboutPage/ui/AboutPage"));

export const AppRouter = () => {
  console.log("routeConfig", Object.values(routeConfig));
  return (
    <Suspense fallback>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};
