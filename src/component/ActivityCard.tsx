import { Image } from "antd"
export const ActivityCard = (props: {
    imgSrc: string,
    title: string,
    description: any,
    subTitle: string
}) => {
    return (
        <div className="d-flex flex-col">
            <div className="p-5 w-100 rounded activity-card-layout md:activity-card-layout" style={{backgroundColor: "#424242"}}>
                <div className="d-flex flex-column justify-content-center" style={{width: "100%"}}>
                    <Image width={"100%"} src={props.imgSrc}></Image>
                </div>
                <div className="w-100 activity-card-description-layout" style={{width: "60%"}}>
                    <div>
                        <h5>{props.title}</h5>
                        <div className="d-flex flex-row gap-1 text-white">
                            {props.subTitle == undefined ? null : props.subTitle}
                        </div>
                    </div>
                    <div className="text-white">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    )
}