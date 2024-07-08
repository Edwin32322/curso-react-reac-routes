import { Navigate } from "react-router";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ Component }) => {
    const ACCESS = false
    return ACCESS ? <Component></Component> : <Navigate to="/login" />
};
