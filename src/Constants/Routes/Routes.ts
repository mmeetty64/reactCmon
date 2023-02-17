import Home from "../../UI/Page/Home";
import Login from "../../UI/Page/Login";
import Registration from "../../UI/Page/Registration";

interface IRoutes{
    path: string,
    page: () => JSX.Element
}

export const Routes:IRoutes[] = [
    {
        path: "/Login",
        page: Login
    },
    {
        path: "/Home",
        page: Home
    },
    {
        path: "/Registration",
        page: Registration
    }
]