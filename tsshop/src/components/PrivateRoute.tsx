import { Navigate } from 'react-router';

export type ProtectedRouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
};

export default function PrivateRoute({ isAuthenticated, authenticationPath, outlet }: ProtectedRouteProps) {
    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};
