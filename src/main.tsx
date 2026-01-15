import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./layout/RootLayout.tsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import { Home } from "./page/Home.tsx";
import { ConfigProvider } from "antd";
import { Member } from "./page/Member.tsx";
import { ArticlesofAssociation } from "./page/ArticlesofAssociation.tsx";
import { Alliances } from "./page/Alliance.tsx";
import { Sponsors } from "./page/Sponsors.tsx";
import { Course } from "./page/Courses.tsx";
import { News } from "./page/News.tsx";
import { Activities } from "./page/Activities.tsx";
import { Rule } from "./page/Rule.tsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<RootLayout></RootLayout>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Member" element={<Member></Member>}></Route>
      <Route path="/ArticlesofAssociation" element={<ArticlesofAssociation></ArticlesofAssociation>}></Route>
      <Route path="/Alliances" element={<Alliances></Alliances>}></Route>
      <Route path="/Sponsors" element={<Sponsors></Sponsors>}></Route>
      <Route path="/Course" element={<Course></Course>}></Route>
      <Route path="/News" element={<News></News>}></Route>
      <Route path="/Activities" element={<Activities></Activities>}></Route>
      <Route path="/Rules" element={<Rule></Rule>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemColor: "white",
            darkItemSelectedBg: "black",
            darkItemBg: "black",
            darkSubMenuItemBg: "black",
            subMenuItemBg: "black",
            darkItemSelectedColor: "#cf2e2e",
          },
          Table: {
            colorBgContainer: "black",
            colorTextDescription: "white",
            colorText: "white",
            colorBorder: "white",
            headerColor: "white",
            borderColor: "white",
            headerBorderRadius: 0,
          },
          Calendar: {
            colorBgContainer: "black",
            colorText: "white",
            fullPanelBg: "black",
            itemActiveBg: "#272727",
            colorPrimary: "red",
            colorTextDisabled: "gray",
          },
          Select: {
            optionSelectedColor: "white",
            colorBgContainer: "black",
            colorText: "white",
            colorTextDescription: "white",
            colorTextPlaceholder: "white",
            colorPrimary: "red",
            colorBorder: "white",
            selectorBg: "black",
            colorBgElevated: "#272727",
            optionSelectedBg: "#272727",
            colorBgBase: "black",
            multipleItemBg: "black",
            optionActiveBg: "black",
            colorTextSecondary: "white",
            colorPrimaryHover: "red",
          },
          Radio: {
            colorBgContainer: "black",
            colorText: "white",
            colorPrimary: "red",
            colorPrimaryActive: "red",
            colorPrimaryHover: "red",
            colorBorder: "white",
          },
          Badge: {
            colorText: "white",
          },
        },
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>
  </React.StrictMode>
);
