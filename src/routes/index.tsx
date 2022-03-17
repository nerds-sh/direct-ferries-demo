import { useRoutes } from "./hooks";
import { Route } from "./route";

export const Routes = () => {
    const routes = useRoutes()

    return <div>
        {routes.map(route => <Route route={route} />)}
    </div>;
}