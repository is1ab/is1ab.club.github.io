import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import { Link } from "react-router-dom";
import { MemberTable, Person, PersonName } from "../component/MemberTable";
import members from "../assets/members.json"

type Term = {
    term: number
    officers: Person[]
    coreMembers: Person[]
}

export function Member(){
    const terms: Term[] = [...members.terms].sort((a, b) => b.term - a.term)

    // 社長、副社長直接從該屆幹部名單中找，不另外重複填寫
    const findByRole = (term: Term, role: string) => term.officers.find((officer) => officer.role === role)

    const termColumns: ColumnType<Term>[] = [
        {
            title: "屆次",
            key: "term",
            width: '20%',
            render: (_text: string, term: Term) => <Link to={`/Member/${term.term}`}>第 {term.term} 屆</Link>
        },
        {
            title: "社長",
            key: "president",
            width: '40%',
            render: (_text: string, term: Term) => <PersonName person={findByRole(term, "社長")} />
        },
        {
            title: "副社長",
            key: "vicePresident",
            width: '40%',
            render: (_text: string, term: Term) => <PersonName person={findByRole(term, "副社長")} />
        }
    ]

    return (
        <div className="member">
            <>
                <h4 className="text-center fw-bold">歷屆幹部（Club Officers）</h4>
                <Table columns={termColumns} dataSource={terms} rowKey="term" pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">社團指導老師（Club Advisors）</h4>
                <MemberTable people={members.advisors} roleTitle="身份" experienceTitle="相關經歷"></MemberTable>
            </>
        </div>
    )
}
