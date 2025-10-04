import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
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
