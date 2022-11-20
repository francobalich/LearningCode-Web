import { Navigate, Outlet} from "react-router-dom"

export const ProtectedRoute = ({children,isAllaowed, redirectTo="/landing"})=>{
    if(!isAllaowed){
        return <Navigate to={redirectTo}/>
    }
    return children ? children : <Outlet />
}