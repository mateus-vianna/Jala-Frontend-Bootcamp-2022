import { Navigate } from 'react-router';
import { useUser } from '../auth/tokenParser';

export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};

export default function PrivateRoute({ authenticationPath, outlet }: ProtectedRouteProps) {
    const user = useUser();

    if (user) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};
