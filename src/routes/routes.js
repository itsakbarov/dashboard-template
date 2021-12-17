import Users from "../pages/Users";
import Comments from "../pages/Comments";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import LoginPage from "../pages/Login";
export const privateRoute = [
  {
    path: "/",
    exact: true,
    layout: DashboardLayout,
    component: () => <Navigate to="/banner" />,
  },

  {
    path: "/feedback",
    layout: DashboardLayout,
    component: Users,
  },
  {
    path: "/banner",
    layout: DashboardLayout,
    component: Comments,
  },
];
const AltLayout = ({ children }) => <Fragment>{children}</Fragment>;

const loginRoute = [
  {
    path: "/",
    exact: true,
    layout: DashboardLayout,
    component: () => <Navigate to="/login" />,
  },
  {
    path: "/login",
    exact: true,
    layout: AltLayout,
    component: LoginPage,
  },
];
const AllRoute = ({ element: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);
const AppRoutes = () => {
  const auth = useSelector((state) => state.auth);
  const token = true;

  return (
    <Routes>
      {token
        ? privateRoute.map((item, id) => {
            return <Route element={Users} path="/" />;
          })
        : loginRoute.map((item, id) => {
            return (
              <AllRoute
                key={id}
                exact
                path={item.url}
                layout={item.layout}
                element={item.component}
              />
            );
          })}
    </Routes>
  );
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default withRouter(AppRoutes);
