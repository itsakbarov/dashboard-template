import { Layout, Menu } from "antd";
import { SIDEBAR_ITEMS } from "../../constants";
import classes from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
const Siderbar = () => {
  const { Sider } = Layout;
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
      }}
    >
      <div className={classes.logoContainer}>Eurosoft</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        {SIDEBAR_ITEMS.map((route, index) => {
          if (!route.name) return null;
          return (
            <Menu.Item key={route.id} icon={route.icon} {...{ index }}>
              <Link to={route.path}>{route.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};
export default Siderbar;
