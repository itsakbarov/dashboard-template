import { InfoCircleOutlined,DashboardOutlined,SettingFilled } from "@ant-design/icons";
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
    icon: <DashboardOutlined />,
    id: 1,
  },
  {
    name: "Comments",
    path: "/comments",
    id: 2,
    icon: <InfoCircleOutlined />,
  },
  {
    name: "Recipes",
    path: "/recipes",
    id: 3,
    icon: <InfoCircleOutlined />,
  },
  {
    name: "Privacy",
    path: "/privacy",
    id: 4,
    icon: <InfoCircleOutlined />,
  },
  {
    name: "Account",
    path: "/setting",
    id: 5,
    icon: <SettingFilled />,
  },
];
