import {Button, Layout, Select, Space} from "antd";
import Sidebar from "../components/Siderbar/Siderbar";
import "antd/dist/antd.css";
import {Option} from "antd/lib/mentions";
import LogoutOutlined from "@ant-design/icons/lib/icons/LogoutOutlined";

const DashboardLayout = ({children}) => {
    const {Header, Content} = Layout;

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sidebar/>
            <Layout className="site-layout">
                <Header
                    className="site-layout-sub-header-background"
                    style={{
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: "22px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        position: "fixed",
                    }}
                >
                    Dashboard
                    <Space>
                        <Select defaultValue={"UZB"} style={{width: 80}}>
                            <Option value="ru">РУС</Option>
                            <Option value="uz-Latn">UZB</Option>
                            <Option value="en">ENG</Option>
                        </Select>
                        <Space direction="horizontal">
                            <Button>
                                <LogoutOutlined color="#fff"/>
                                <span style={{fontSize: "14px"}}>{"Log Out"}</span>
                            </Button>
                        </Space>
                    </Space>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "64px 16px 24px 16px",
                        padding: "24px 0 0 14rem",
                        minHeight: 280,
                    }}
                >
                    <div className="main_content">
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;
