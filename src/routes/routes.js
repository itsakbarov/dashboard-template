import Users from "../pages/Users";
import Dashboard from "../pages/Dashboard";
import {
    Route,
    Routes,
    useLocation,
    useNavigate,
    useParams,
    Navigate,
} from "react-router-dom";
import {useSelector} from "react-redux";
import {Fragment} from "react";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../pages/Login";
import Comments from "../pages/Comments";
import Chat from "../pages/chat";
import Board from "../pages/board";
import {Register, Login, Reset} from '../components/login'

export const privateRoute = [
    {
        path: "/",
        exact: true,
        layout: DashboardLayout,
        component: () => <Navigate to="/dashboard"/>,
    },

    {
        path: "/dashboard",
        layout: DashboardLayout,
        component: Dashboard,
    },
    {
        path: "/users",
        layout: DashboardLayout,
        component: Users,
    },
    {
        path: "/comments",
        layout: DashboardLayout,
        component: Comments,
    },
    {
        path: "/chat",
        layout: DashboardLayout,
        component: Chat,
    },
    {
        path: "/board",
        layout: DashboardLayout,
        component: Board,
    },
    {
        path: "/login",
        layout: DashboardLayout,
        component: () => <Navigate to="/"/>,
    },
];
const AltLayout = ({children}) => <Fragment>{children}</Fragment>;

const loginRoute = [
    {
        path: "/",
        exact: true,
        layout: AltLayout,
        component: () => <Navigate to="/login"/>,
    },
    {
        path: "/login",
        exact: true,
        layout: LoginPage,
        component: Login,
    },
    {
        path: "/register",
        exact: true,
        layout: LoginPage,
        component: Register,
    },
    {
        path: "/reset-password",
        exact: true,
        layout: LoginPage,
        component: Reset,
    },
    {
        path: "*",
        exact: true,
        layout: LoginPage,
        component: () => <Navigate to={'/login'}/>,
    },
];
const AppRoutes = () => {
    const auth = useSelector((state) => state.auth);
        const token = auth

    const privateRoutesList = privateRoute.map((item, id) => {
        const {component: Component} = item;
        return (
            <Route
                key={id}
                exact
                path={item.path}
                element={<Component/>}
            />
        );
    });
    const loginRouteList = loginRoute.map((item, id) => {
        const {component: Component} = item;
        return (
            <Route
                key={id}
                exact
                path={item.path}
                element={<Component/>}
            />
        );
    });
    return (
        <Fragment>
            {token ? (
                <DashboardLayout>
                    <Routes>
                        {privateRoutesList}
                    </Routes>
                </DashboardLayout>
            ) : (
                <LoginPage>
                    <Routes>
                        {loginRouteList}
                    </Routes>
                </LoginPage>
            )}
        </Fragment>
    );
};

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{location, navigate, params}}/>;
    }

    return ComponentWithRouterProp;
}

export default withRouter(AppRoutes);
