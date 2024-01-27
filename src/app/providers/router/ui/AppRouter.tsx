import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/route-config/route-config";

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path} element={
                        <Suspense fallback="Loading...">
                            {element}
                        </Suspense>
                    } />
            ))}
        </Routes>
    );
};

export default AppRouter;
