import { Button, Layout, Select, Space } from "antd";
import Sidebar from "../components/Siderbar/Siderbar";
import "antd/dist/antd.css";
import { Option } from "antd/lib/mentions";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";
import axios from "axios";
const DashboardLayout = ({ children }) => {
  const { Header, Content } = Layout;

  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: "0 1rem 0  15rem",
            color: "#fff",
            fontWeight: 600,
            fontSize: "22px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Dashboard
          <Space>
            <Select defaultValue={"UZB"} style={{ width: 80 }}>
              <Option value="ru">РУС</Option>
              <Option value="uz-Latn">UZB</Option>
              <Option value="en">ENG</Option>
            </Select>
            <Space direction="horizontal">
              <Button>
                <LogoutOutlined color="#fff" />
                <span style={{ fontSize: "14px" }}>{"Log Out"}</span>
              </Button>
            </Space>
          </Space>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: "24px 0 0 14rem",
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
