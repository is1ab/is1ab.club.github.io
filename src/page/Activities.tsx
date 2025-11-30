import { ActivityCard } from "../component/ActivityCard"
import ActivityImage from "../assets/activity/activity-image.png"
import ActivityImage2 from "../assets/activity/activity-image-2.png"

export function Activities(){
    const ActivityItems = [
        {
            imgSrc: ActivityImage,
            title: "2024 AIS3 新型態暑期課程",
            subTitle: "2024/01/01 - Taipei City",
            description: "以落實產業資安實務為導向設計課程內容，並引導學員依興趣組成跨校跨級學習小組，製作與展示專題成果。錄取考核分為『Pre-exam資安實務測驗』錄取 110 人及『甄選』錄取 40 人，共錄取 150 人。"
        },
        {
            imgSrc: ActivityImage2,
            title: "2024 資安技能金盾初賽",
            subTitle: "2024/01/01 - Taipei City",
            description: "為加強學生資安實務技能，透過競賽機制，以實務與時事題型，提升學生解決資安問題能力與實戰經驗，分為初賽與決賽，參賽對象包含國中、高中及大專校院在學學生，每組最多3人，活動富教育意義且對升學有助益。"
        },
    ]
    return (
        <div className="activities">
            <h4 className="text-center fw-bold">歷史活動</h4>
            <div className="d-flex flex-column gap-3">
                {ActivityItems.map((activity) => {
                    return (
                        <ActivityCard
                            imgSrc={activity.imgSrc}
                            title={activity.title}
                            subTitle={activity.subTitle}
                            description={activity.description}
                        />
                    )
                })}
            </div>
        </div>
    )
}
