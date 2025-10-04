import news from "../assets/news.json"

export function News(){

    const NewsItem = (props: {
        people: string
        description: string
        extraDescription?: string
        time: string
    }) => {
        return (
            <tr>
                <td className="border border-1">
                    <span className="title">👑賀！</span>
                    <strong>{props.people}</strong>&nbsp;
                    <span>{props.description}</span>
                    {props.extraDescription === undefined ? null : <span className="extra-description">{props.extraDescription}</span>}
                </td>
                <td className="border border-1">
                    <span>{props.time}</span>
                </td>
            </tr>
        )
    }

    return (
        <div className="news">
            <h4 className="text-center fw-bold">公告 Announcements</h4>
            <div className="d-flex flex-column">
                <br/>
                <table className="table-bordered">
                    { 
                        news.map((data) => {
                            return (
                                <NewsItem 
                                    people={data.people} 
                                    description={data.description}
                                    time={data.time}
                                    extraDescription={data.extraDescription}
                                ></NewsItem>
                            )
                        })
                    }
                </table>
            </div>
        </div>
    )
}
