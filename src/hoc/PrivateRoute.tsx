import { FC } from "react";

// eslint-disable-next-line import/named
import { Redirect, Route, RouteProps } from "react-router";
import { useAuth } from "../hooks/hooks";

const PrivateRoute: FC<RouteProps> = (props) => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect to="/sign-in" />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
