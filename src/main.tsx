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
import { Alumni } from "./page/Alumni.tsx";
import { Partner } from "./page/Partner.tsx";
import { Sponsors } from "./page/Sponsors.tsx";
import { Publication } from "./page/Publication.tsx";
import { Experience } from "./page/Experience.tsx";
import { Course } from "./page/Courses.tsx";
import { Record } from "./page/Records.tsx";
import { News } from "./page/News.tsx";
import { Meeting } from "./page/Meeting.tsx";
import { Activities } from "./page/Activities.tsx";
import { Rule } from "./page/Rule.tsx";
import { UriahMemberPage } from "./member/2023/Uriah.tsx";
import { YMemberPage } from "./member/2023/Y.tsx";
import { SaltMemberPage } from "./member/2023/Salt.tsx";
import { RyanMemberPage } from "./member/2022/Ryan.tsx";
import { Adb2MemberPage } from "./member/2024/Adb2.tsx";
import { WIFIMemberPage } from "./member/2024/WIFI.tsx";
import { YPPMemberPage } from "./member/2024/ypp.tsx";
import { YoungMemberPage } from "./member/2024/Young.tsx";
import { PaulWangMemberPage } from "./member/2024/PaulWang.tsx";
import { WinMemberPage } from "./member/2024/Win.tsx";
import { JoeMemberPage } from "./member/2024/Joe.tsx";
import { EasonMemberPage } from "./member/2023/Eason.tsx";
import { BoboMemberPage } from "./member/2023/Bobo.tsx";
import { Guan4Tou2MemberPage } from "./member/2024/Guan4Tou2.tsx";
import { IanMemberPage } from "./member/2024/Ian.tsx";
import { RockMemberPage } from "./member/2024/Rock.tsx";
import { CHWMemberPage } from "./member/2023/CHW.tsx";
import { RavinMemberPage } from "./member/2023/Ravin.tsx";
import { KunjiliMemberPage } from "./member/2022/Kunjili.tsx";
import { CliffMemberPage } from "./member/2022/Cliff.tsx";
import { SP_2022 } from "./course/2022_SP.tsx";
import { SP_2024 } from "./course/2024_SP.tsx";
import { SP_2025 } from "./course/2025_SP.tsx";
import { _483MemberPage } from "./member/2025/483.tsx";
import { JunAnMemberPage } from "./member/2025/JunAn.tsx";
import { YuericMemberPage } from "./member/2025/Yueric.tsx";
import { RobertLiaoMemberPage } from "./member/2024/RobertLiao.tsx";
import { YeyeyeMemberPage } from "./member/2025/Yeyeye.tsx";
import { WillyMemberPage } from "./member/2025/Willy.tsx";
import { YunungMemberPage } from "./member/2025/Yunung.tsx";
import { VictorMemberPage } from "./member/2025/Victor.tsx"

import { MarcoMemberPage } from "./member/2024/Marco.tsx";
import { TingMemberPage } from "./member/2025/Ting.tsx";

const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<RootLayout></RootLayout>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/Member" element={<Member></Member>}></Route>
      <Route path="/Member/2023/Uriah" element={<UriahMemberPage />}></Route>
      <Route path="/Member/2023/Y" element={<YMemberPage />}></Route>
      <Route path="/Member/2023/Salt" element={<SaltMemberPage />}></Route>
      <Route path="/Member/2022/Ryan" element={<RyanMemberPage />}></Route>
      <Route path="/Member/2024/Adb2" element={<Adb2MemberPage />}></Route>
      <Route path="/Member/2024/WIFI" element={<WIFIMemberPage />}></Route>
      <Route path="/Member/2023/Eason" element={<EasonMemberPage />}></Route>
      <Route path="/Member/2024/ypp" element={<YPPMemberPage />}></Route>
      <Route path="/Member/2024/Young" element={<YoungMemberPage />}></Route>
      <Route path="/Member/2024/Win" element={<WinMemberPage />}></Route>
      <Route path="/Member/2023/Bobo" element={<BoboMemberPage />}></Route>
      <Route
        path="/Member/2024/PaulWang"
        element={<PaulWangMemberPage />}
      ></Route>
      <Route path="/Member/2024/Joe" element={<JoeMemberPage />}></Route>
      <Route
        path="/Member/2024/Guan4Tou2"
        element={<Guan4Tou2MemberPage />}
      ></Route>
      <Route path="/Member/2024/Ian" element={<IanMemberPage />}></Route>
      <Route path="/Member/2024/Rock" element={<RockMemberPage />}></Route>
      <Route path="/Member/2023/CHW" element={<CHWMemberPage />}></Route>
      <Route path="/Member/2023/Ravin" element={<RavinMemberPage />}></Route>
      <Route
        path="/Member/2022/Kunjili"
        element={<KunjiliMemberPage />}
      ></Route>
      <Route path="/Member/2022/Cliff" element={<CliffMemberPage />}></Route>
	  <Route path="/Member/2025/483" element={ <_483MemberPage />}></Route>
      <Route path="/Member/2025/JunAn" element={ <JunAnMemberPage />}></Route>
      <Route path="/Member/2025/Yueric" element={<YuericMemberPage />}></Route>
      <Route path="/Member/2024/RobertLiao" element={<RobertLiaoMemberPage />}></Route>
      <Route path="/Member/2025/Yeyeye" element={<YeyeyeMemberPage />}></Route>
      <Route path="/Member/2025/Willy" element={<WillyMemberPage />}></Route>
      <Route path="/Member/2024/Marco" element={<MarcoMemberPage />}></Route>
      <Route path="/Member/2025/Ting" element={<TingMemberPage />}></Route>
      <Route path="/Member/2025/Yunung" element={<YunungMemberPage />}></Route>
      <Route path="/Member/2025/Victor" element={<VictorMemberPage />}></Route>

      <Route path="/Alumni" element={<Alumni></Alumni>}></Route>
      <Route path="/Partner" element={<Partner></Partner>}></Route>
      <Route path="/Sponsors" element={<Sponsors></Sponsors>}></Route>
      <Route path="/Publication" element={<Publication></Publication>}></Route>
      <Route path="/Experience" element={<Experience></Experience>}></Route>
      <Route path="/Course" element={<Course></Course>}></Route>
      <Route path="/Record" element={<Record></Record>}></Route>
      <Route path="/News" element={<News></News>}></Route>
      <Route path="/Calendar" element={<Meeting></Meeting>}></Route>
      <Route path="/Activities" element={<Activities></Activities>}></Route>
      <Route path="/Rules" element={<Rule></Rule>}></Route>
      <Route path="/Course/2022/SP" element={<SP_2022></SP_2022>}></Route>
      <Route path="/Course/2024/SP" element={<SP_2024></SP_2024>}></Route>
      <Route path="/Course/2025/SP" element={<SP_2025></SP_2025>}></Route>
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
