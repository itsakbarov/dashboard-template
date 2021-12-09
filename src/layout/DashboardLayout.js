import { Button, Layout, Select, Space } from "antd";
import Sidebar from "../components/Siderbar/Siderbar";
import "antd/dist/antd.css";
import { Option } from "antd/lib/mentions";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";

const DashboardLayout = ({ children }) => {
  const { Header, Content } = Layout;

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
            <Select
              // defaultValue={i18n.language}
              defaultValue={"UZB"}
              style={{ width: 80 }}
              // onChange={(language) => {
              // dispatch(changeLanguage(language));
              // setTimeout(() => window.location.reload(), 500);
              // }}
            >
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
