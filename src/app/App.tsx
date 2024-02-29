import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/classNames";

import { useTheme } from "./providers/ThemeProvider";

import { AppRouter } from "./providers/router";
import { NavBar } from "widgets/NavBar";
import { SiderBar } from "widgets/SideBar";
import { Suspense } from "react";

import "shared/config/i18n/i18n";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />

        <div className="content-page">
          <SiderBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
