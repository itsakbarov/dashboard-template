import Users from "../pages/Users";
import Comments from "../pages/Comments";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
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
    component: () => <Navigate to="/dashboard" />,
  },

  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: Users,
  },
  {
    path: "/comments",
    layout: DashboardLayout,
    component: Comments,
  }, {
    path: "/login",
    layout: DashboardLayout,
    component: () => <Navigate to="/" />,
  },
];
const AltLayout = ({ children }) => <Fragment>{children}</Fragment>;

const loginRoute = [
  {
    path: "/",
    exact: true,
    layout: AltLayout,
    component: () => <Navigate to="/login" />,
  },
  {
    path: "/login",
    exact: true,
    layout: AltLayout,
    component: LoginPage,
  },
];

const AppRoutes = () => {
  const auth = useSelector((state) => state.auth);
  const token = true;

  const privateRoutesList = privateRoute.map((item, id) => {
    const {component: Component} = item;
    return (
        <Route
            key={id}
            exact
            path={item.path}
            layout={<DashboardLayout />}
            element={<Component />}
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
        element={<Component />}
      />
    );
  });
  console.log(privateRoutesList);
  return (
      <Fragment>

      <DashboardLayout>

      <Routes>
        {token ? privateRoutesList : loginRouteList}
      </Routes>

      </DashboardLayout>
    </Fragment>
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
