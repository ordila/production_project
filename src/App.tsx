import { Route, Routes } from "react-router-dom";

import { Link } from "react-router-dom";

import { Suspense, lazy } from "react";

import "./styles/index.scss";

import { useTheme } from "./theme/useTheme";

const MainPageLazy = lazy(() => import("./pages/MainPage/MainPage"));
const AboutPageLazy = lazy(() => import("./pages/AboutPage/AboutPage"));

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
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
