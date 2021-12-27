import {
    InfoCircleOutlined,
    DashboardOutlined,
    SettingFilled,
    MessageOutlined,
    SecurityScanOutlined,
    BarChartOutlined
} from "@ant-design/icons";
import Image from '../assets/images/avatar.jpg'

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
        name: "Form",
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
    {
        name: "Calendar",
        path: "/calendar",
        id: 9,
        icon: <BarChartOutlined/>,
    },
];
export const TOOLBAR_DATAS = {
    users: [
        {
            name: "Josh",
            message: "Hi Josh How are you doing",
            image: Image
        },
        {
            name: "Sardor",
            message: "Hi Josh How are you doing",
            image: Image
        },
        {
            name: "Manager",
            message: "Hey there",
            image: Image
        },
    ],
    contacts: [],
    groups: [],
}