import {
    InfoCircleOutlined,
    DashboardOutlined,
    SettingFilled,
    MessageOutlined,
    SecurityScanOutlined,
    BarChartOutlined
} from "@ant-design/icons";

export const languages = [
    {
        id: "ru",
        title: "РУ",
    },
    {
        id: "uz-Cyrl",
        title: "ЎЗ",
    },
    {
        id: "uz-Latn",
        title: "UZ",
    },
    {
        id: "en",
        title: "EN",
    },
];

export const SIDEBAR_ITEMS = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <DashboardOutlined/>,
        id: 1,
    },
    {
        name: "Comments",
        path: "/comments",
        id: 2,
        icon: <InfoCircleOutlined/>,
    },
    {
        name: "Recipes",
        path: "/recipes",
        id: 3,
        icon: <InfoCircleOutlined/>,
    },
    {
        name: "Privacy",
        path: "/privacy",
        id: 4,
        icon: <SecurityScanOutlined/>,
    },
    {
        name: "Account",
        path: "/setting",
        id: 5,
        icon: <SettingFilled/>,
    },
    {
        name: "Chat",
        path: "/chat",
        id: 7,
        icon: <MessageOutlined/>,
    },
    {
        name: "Kanban Board",
        path: "/board",
        id: 8,
        icon: <BarChartOutlined/>,
    },
];
