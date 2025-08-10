import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import {
  Background,
  Logout,
  Loading,
  NotificationPopUp,
  Navbar,
} from "./components";
import { setAppError } from "./redux/app/actions";
import { appSelector } from "./redux/app/selectors";
import { refreshToken } from "./redux/auth/actions";
import { authSelector } from "./redux/auth/selectors";
import { authRoutes, routes } from "./routes/routes";
import { Routes } from "./utils/constants";

function App() {
  const { isLoading, error } = useSelector(appSelector);
  const { isAuth } = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  useEffect(() => {
    let timeout: number;
    if (error) {
      timeout = window.setTimeout(() => dispatch(setAppError(null)), 5000);
    }

    return () => {
      error && clearTimeout(timeout);
    };
  }, [error, dispatch]);

  return (
    <Background paddingLeft={isAuth}>
      {isAuth && <Logout />}

      <NotificationPopUp error={error} />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isAuth && <Navbar />}
          <Switch>
            {!isAuth
              ? routes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    exact
                    path={path}
                    render={() => <Component />}
                  />
                ))
              : authRoutes.map(({ path, Component }) => (
                  <Route
                    key={path}
                    exact
                    path={path}
                    render={() => <Component />}
                  />
                ))}

            <Redirect
              from="*"
              to={isAuth ? Routes.AllRestaurants : Routes.Login}
            />
          </Switch>
        </>
      )}
    </Background>
  );
}

export default App;
