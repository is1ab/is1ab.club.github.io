import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const joinFormUrl = "https://forms.gle/Q8E44fxzK2o3uo2m7";
  const items: MenuProps["items"] = [
    {
      key: "about us",
      label: "關於我們 About Us",
      children: [
        {
          key: "member",
          label: "成員 Members",
          onClick: () => navigate("/Member"),
        },
        {
          key: "Articles of Association",
          label: "組織章程 Articles of Association",
          onClick: () => navigate("/ArticlesofAssociation"),
        }
      ],
    },
    {
      key: "news",
      label: "消息 News",
      onClick: () => navigate("/News"),
    },
    {
      key: "activities",
      label: "活動 Activities",
      onClick: () => navigate("/Activities"),
    },
    {
      key: "joinus",
      label: "加入我們 Join us",
      onClick: () => window.open(joinFormUrl, "_blank"),
    },
    {
      key: "alliances",
      label: "聯盟 Alliances",
      onClick: () => navigate("/Alliances"),
    },
    {
      key: "sponsors",
      label: "贊助 Sponsors",
      onClick: () => navigate("/Sponsors"),
    },
  ];
  return (
    <Menu
      className="bg-black fw-bold"
      theme="dark"
      mode="horizontal"
      items={items}
    ></Menu>
  );
}
