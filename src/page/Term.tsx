import { useParams } from "react-router-dom";
import { Terms } from "../term";
import { TermTemplate } from "../term/TermTemplate";

export function Term(){
    const { term } = useParams()
    const data = Terms.find((item) => String(item.term) === term)

    if(data === undefined){
        return (
            <div className="member">
                <a href="#/Member">← 返回成員列表</a>
                <h4 className="text-center fw-bold">找不到第 {term} 屆的資料</h4>
            </div>
        )
    }

    return <TermTemplate data={data}></TermTemplate>
}
