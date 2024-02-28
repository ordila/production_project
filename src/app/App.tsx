import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";

import { Suspense, lazy } from "react";

import "./styles/index.scss";

import { classNames } from "../shared/lib/classNames/classNames";

import { useTheme } from "./providers/ThemeProvider";

const MainPageLazy = lazy(() => import("../pages/MainPage/ui/MainPage"));
const AboutPageLazy = lazy(() => import("../pages/AboutPage/ui/AboutPage"));

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}> Toggle</button>
      <Link to="/">Home</Link>
      <Link to="/about"> About</Link>

      <Suspense fallback>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
