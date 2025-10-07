import { Sample } from "../Sample";
import { useEffect } from "react";
import {
	MemberArticleType,
	MemberCertificateType,
	MemberInternType,
	MemberParticipateType,
	MemberCompetitionExperienceType,
} from "../../type/MemberCertificateType";

// 個人簡介
const bio = () => {
	useEffect(() => {
		const styleTag = document.createElement("style");
		styleTag.innerHTML = `
			@keyframes colorChange {
				0%   { color: rgb(255, 127, 80); } 
				25%  { color: rgb(218, 165, 32); } 
				50%  { color: rgb(60, 179, 113); } 
				75%  { color: rgb(135, 206, 235); }
				100% { color: rgb(186, 85, 211); } 
			}
			.yeyeyeBioBlock .yeyeyeRgbText{
				animation: colorChange 7s linear infinite forwards;
			}
		`;
		document.head.appendChild(styleTag);
		return () => {
			document.head.removeChild(styleTag);
		};
	}, []);
	return (
		<div className="yeyeyeBioBlock">
			<p>
				我是劉業閎，可以叫我 <strong className="yeyeyeRgbText">夜</strong>{" "}
				也可以叫我 <strong className="yeyeyeRgbText">業</strong> 又或者是{" "}
				<strong className="yeyeyeRgbText">葉</strong> ，看你喜歡哪個
			</p>
		</div>
	);
};

// 圖片來源
import avatarSrc from "../../assets/member/yeyeye.jpg";

// 比賽經歷
const competitionExp: MemberCompetitionExperienceType[] = [
	{
		title: "TSCCTF 2025",
		result: "112/509",
		datetime: "2025/01/13 - 2025/01/16",
	},
	{
		title: "SwampCTF 2025",
		result: "219/751",
		datetime: "2025/03/28 - 2025/03/30",
	},
	{
		title: "AIS3 Pre-exam CTF 2025",
		result: "201/493",
		datetime: "2025/05/25 - 2025/05/27",
	},
	{
		title: "DownUnderCTF 2025",
		result: "500/1667  Team(Name: NTUT_Is1ab)",
		datetime: "2025/07/18 - 2025/07/20",
	},
	{
		title: "WHYCTF 2025",
		result: "188/1806 Team(Name: NTUT_is1ab)",
		datetime: "2025/08/09 - 2025/08/11",
	},
	{
		title: "SekaiCTF 2025",
		result: "199/1060 Team(Name: NTUT_Is1ab)",
		datetime: "2025/08/16 - 2025/08/18",
	},
	{
		title: "FortID CTF 2025",
		result: "249/553 Team(Name: NTUT_Is1ab)",
		datetime: "2025/08/16 - 2025/08/18",
	},
];

// 資安證照／檢定
const certificates: MemberCertificateType[] = [
	{
		title: "iPAS 資訊安全工程師-初級能力鑑定",
		datetime: "2024/11/23",
	},
];

// 活動參與
const participates: MemberParticipateType[] = [
	{
		title: "SITCON 2025",
		datetime: "2025/03/08 - 2025/03/10",
	},
	{
		title: "CYBERSEC 2024 臺灣資安大會",
		datetime: "2024/05/14 - 2024/05/16",
	},
];

// 實習經歷
const internExperiences: MemberInternType[] = [];

// 期刊論文
const journals: MemberArticleType[] = [];

// 會議論文
const conferences: MemberArticleType[] = [];

// 技術會議論文
const techConfs: MemberArticleType[] = [];

export const YeyeyeMemberPage = () => {
	return (
		<Sample
			zhName="劉業閎"
			enName="Liu, Yeah Hung"
			avatar={avatarSrc}
			institutes={["國立臺北科技大學 資工系碩士班 碩一"]}
			bio={bio()}
			experiences={competitionExp}
			certificates={certificates}
			participates={participates}
			intern={internExperiences}
			journals={journals}
			conferences={conferences}
			techConfs={techConfs}
		/>
	);
};
