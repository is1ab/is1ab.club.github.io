import { Sample } from "../Sample"
import logo from "../../assets/member/Guan4Tou2.png"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType,MemberZeroDayType } from "../../type/MemberCertificateType"

export const Guan4Tou2MemberPage = () => {
    const bio = "我超弱"
    const certificates: MemberCertificateType[] = [
        {
            title: "iPAS 資訊安全工程師-初級能力鑑定",
            datetime: "2024.06.01"
        },
    ]
    const raceExperiences: MemberCompetitionExperienceType[] = [
        {
            title: "Diver OSINT CTF",
            result: "200th",
            datetime: "2024.06.09"
        },
        {
            title: "離島盃資安競賽 大專/碩組",
            result: "4th",
            datetime: "2024.05.25"
        },
        {
            title: "資安大會 CyberRange",
            result: "15th",
            datetime: "2024.05.16"
        },
        {
            title: "picoCTF",
            result: "377th",
            datetime: "2024.03.12-2024.03.26"
        },
        {
            title: "KnightCTF",
            result: "158th",
            datetime: "2024.01.23"
        },
        {
            title: "TSCCTF",
            result: "50th",
            datetime: "2024.01.20"
        },
        {
            title: "AIS3 pre-exam",
            result: "",
            datetime: "2023"
        },
        {
            title: "AIS3 pre-exam",
            result: "",
            datetime: "2022"
        },
        {
            title: "TFCCTF",
            result: "",
            datetime: "2022.07.29 - 2022.07.31"
        },
                {
            title: "AIS3 EOF",
            result: "",
            datetime: "2025.02.07 - 2025.02.08"
        }
    ]
    const participates: MemberParticipateType[] = [
        {
            title: "錄取 2022 AIS3 新型態資安暑期課程",
            datetime: "2022.07.25 - 2022.07.31"
        },
        {
            title: "錄取 2023 AIS3 新型態資安暑期課程",
            datetime: "2023.07.24 - 2023.07.30"
        },
        {
            title: "HITCON HackDoor",
            datetime: "2019.08.17"
        },
        {
            title: "金融資安 Mentor 實務教學",
            datetime: "2023.8.24 - 2023.8.25"
        },
        {
            title: "雲嘉資安體驗營",
            datetime: "2022.03.26"
        },
        {
            title: "資訊安全暑訓營 MyFirstSecurity Summer Camp",
            datetime: "2019.07.16 - 2019.07.19"
        },
        {
            title: "TDOH Conf 駭客地下城 會眾",
            datetime: "2019.11.30"
        },
        {
            title: "TDOH Conf 駭客地下城 會眾",
            datetime: "2017.10.14"
        },
        {
            title: "CraftCon Taiwan 奧義AI 資安年會 會眾",
            datetime: "2024.07.12"
        },
        {
            title: "資安大會 CyberSec 會眾",
            datetime: "2024.04.15 - 2024.04.17"
        },
        {
            title: "DEVCORE CONFERENCE 2024 會眾",
            datetime: "2024.03.16"
        },
        {
            title: "教育體系資安攻防演練 攻防檢測員",
            datetime: "2024.07.23"
        },
        {
            title: "電商產業外網資安檢測服務攻擊手",
            datetime: "2025.02 - 2025.03"
        },
        {
            title: "DEVCORE CONFERENCE 2025 會眾",
            datetime: "2025.03.15"
        },
        {
            title: "第九屆台灣好厲駭-高階培訓模式",
            datetime: "2024.08.31"
        },
    ]
    const internExperiences: MemberInternType[] = [
        {
            company: "保華資安股份有限公司",
            info: "資安實習生",
            datetime: "2024.06 - 2025.02"
        },
    ]
    const journals: MemberArticleType[] = []        
    const conferences: MemberArticleType[] = [
        {
            authors: "Guan-Ting Wu",
            title: "Lightweight-network-attack-and-defense-learning-simulation-environment",
            target: "The Twelfth National Conference on Web Intelligence and Applications",
            details: "Taiwan, 2022"
        }
    ]
    const techConfs: MemberArticleType[] = []
    const zeroday: MemberZeroDayType[] = [
            {
                id: ( 
                    <div>
                        <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00018">ZD-2024-00018</a> 
                    </div>
                ),
                title: "臺南市私立長榮高級中學資料庫注入漏洞",
                datetime: "2024.04.18"
            },
            {
                id: ( 
                    <div>
                        <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00807">ZD-2024-00807</a> 
                    </div>
                ),
                title: "聯和趨動官網 .env leak",
                datetime: "2024.09.19"
            },
            {
                id: ( 
                    <div>
                        <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-00830">ZD-2024-00830</a> 
                    </div>
                ),
                title: "富佰客 公司資料庫注入漏洞",
                datetime: "2024.09.27"
            },
            {
                id: ( 
                    <div>
                        <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-01468">ZD-2024-01468</a> 
                    </div>
                ),
                title: "國立中山大學 密碼查詢資料庫注入",
                datetime: "2024.12.19"
            },
            {
                id: ( 
                    <div>
                        <a href="https://zeroday.hitcon.org/vulnerability/ZD-2024-01476">ZD-2024-01476</a> 
                    </div>
                ),
                title: "台灣奇茂資訊有限公司 官網 git leak",
                datetime: "2025.01.06"
            },
    ]

    return (
        <Sample
            zhName="吳冠廷"
            enName="GUAN-TING WU"
            avatar={logo}
            institutes={["國立臺北科技大學 資訊工程所 資訊安全實驗室"]}
            bio={bio}
            experiences={raceExperiences}
            certificates={certificates}
            participates={participates}
            intern={internExperiences}
            journals={journals}
            conferences={conferences}
            techConfs={techConfs}
            zeroday={zeroday}
        ></Sample>
    )
}
