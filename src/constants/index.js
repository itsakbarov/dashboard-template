import { InfoCircleOutlined } from "@ant-design/icons";
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
    name: "Users",
    path: "/users",
    icon: <InfoCircleOutlined />,
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
    path: "/account",
    id: 5,
    icon: <InfoCircleOutlined />,
  },
];
