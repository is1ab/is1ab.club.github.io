import { Link, useParams } from "react-router-dom";
import { MemberTable } from "../component/MemberTable";
import members from "../assets/members.json"

export function MemberTerm(){
    const params = useParams()
    const term = members.terms.find((t) => t.term.toString() === params.term)

    if(term === undefined){
        return (
            <div className="member">
                <h4 className="text-center fw-bold">找不到這一屆</h4>
                <Link to="/Member">← 返回歷屆列表</Link>
            </div>
        )
    }

    return (
        <div className="member">
            <Link to="/Member">← 返回歷屆列表</Link>
            <>
                <h4 className="text-center fw-bold">社團幹部（Club Officers）</h4>
                <MemberTable people={term.officers} roleTitle="職稱" experienceTitle="特殊經歷"></MemberTable>
            </>
            { term.coreMembers.length > 0 &&
                <>
                    <hr></hr>
                    <h4 className="text-center fw-bold">核心成員（Core Members）</h4>
                    <MemberTable people={term.coreMembers} roleTitle="單位" experienceTitle="特殊經歷"></MemberTable>
                </>
            }
        </div>
    )
}
