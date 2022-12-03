import styles from "./App.module.css";
import PageInfo from "./components/page_info/page_info.jsx";
import "./App.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React from "react";
import Menu from "./components/menu/menu";
import { items } from "./data/items";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={location.key}>
        <div className={styles.container}>
          <Routes location={location}>
            <Route exact path="/" element={<Menu />}></Route>
            {items.map((val, ind) => (
              <Route
                path={val.path}
                exact
                element={
                  <PageInfo
                    text={val.title}
                    bgColor={val.color}
                    navigate={navigate}
                  />
                }
                key={ind}
              ></Route>
            ))}
            <Route
              path="*"
              element={<Navigate to="/" replace={true} />}
            ></Route>
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
