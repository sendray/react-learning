import { useRouteError } from "react-router";

interface RouteError {
  status?: number;
  statusText?: string;
}

const Error = () => {
  const routeError = useRouteError() as RouteError;

  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <h3>
        {routeError.status}: {routeError.statusText}
      </h3>
    </div>
  );
};

export default Error;