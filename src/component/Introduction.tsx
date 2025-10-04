import { useNavigate } from "react-router-dom"
import { Topics } from "./Topics"
import topics from "../assets/topics.json"

export function Introduction(){
    const navigate = useNavigate()
    return (
        <div className="p-3 py-4 introduction">
            <h4 className="text-center fw-bold mb-3">簡介</h4>
            <p> <span style={{fontWeight: 800}}>is1ab club</span> 是由社長 dkri3c1 和其他 O 位夥伴於 2025 年 10 月創立的「北科大學生社團」。旨於成立戰隊，並將活躍於國內外各式各樣的資安競賽。is1ab club 每個月也會定期舉辦讀書會分享彼此的研究成果和訓練表達能力，並每年協助北科大/北聯大舉辦資安相關活動與 CTF 賽事。我們歡迎臺灣不限年齡的夥伴們加入一起學習。</p>
        </div>
    )
}
