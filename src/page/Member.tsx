import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import { Terms } from "../term";
import { TermMemberItem } from "../term/TermType";

export function Member(){
    const renderLeader = (leader: TermMemberItem | undefined) => {
        if(leader === undefined){
            return <p>—</p>
        }
        return leader.website === undefined ? <p>{leader.name}</p> : <a href={leader.website}>{leader.name}</a>
    }

    const TermsTableItem = Terms.map((item) => ({
        key: String(item.term),
        term: item.term,
        president: item.officers.find((officer) => officer.role === "社長"),
        vicePresident: item.officers.find((officer) => officer.role === "副社長")
    }))

    
    const AdvisorsTableItem = [
        {
            key: '1',
            name: "孫勤昱",
            joinDate: "社團指導老師",
            role: "",
            coAdvisor: '',
            experience: "國立臺北科技大學 資訊工程系 助理教授、國立臺北科技大學 計算機與網路中心 網路作業組組長",
            certificate: "",
            website: "https://is1ab.com/"
		},
		{
            key: '2',
            name: "陳昱圻",
            joinDate: "社團共同指導老師",
            role: "",
            coAdvisor: '',
            experience: "國立臺北科技大學 資訊工程系 正教授、國立臺北科技大學 資訊安全碩博士學位學程主任",
            certificate: "",
            website: "https://cislab-ntut.github.io/"
        }
    ]

    const terms_tableColumns: ColumnType<any>[] = [
        {
            title: "屆別",
            dataIndex: 'term',
            key: "term",
            width: '20%',
            render: (_text: string, render: any, _index: number) => {
                return <a href={`#/Member/Term/${render.term}`}>第 {render.term} 屆</a>
            }
        },
        {
            title: "社長",
            key: "president",
            width: '40%',
            render: (_text: string, render: any, _index: number) => renderLeader(render.president)
        },
        {
            title: "副社長",
            key: "vicePresident",
            width: '40%',
            render: (_text: string, render: any, _index: number) => renderLeader(render.vicePresident)
        }
    ]


    const tableColumns: ColumnType<any>[] = [
        {
            title: "姓名",
            dataIndex: 'name',
            key: "name",
            width: '15%',
            render: (_text: string, render: any, _index: number) => {
                return (
                    <>
                        {render.website === undefined ? <p>{render.name}</p> : <a href={render.website}>{render.name}</a>}
                    </>
                )
            }
        },
        {
            title: "身份",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <>
                        <p>{render.joinDate}
                        { render.role !== "" ? <span>（{render.role}）</span> : null}
                        </p>
                        { render.coAdvisor == "" ? null : <p>－與 <span style={{fontWeight: "800"}}>{render.coAdvisor}</span> 老師共同指導</p> }
                    </>
                )
            },
            width: '15%'
        },
        {
            title: "相關經歷",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <div className="d-flex flex-column">
                        { render.ability == '' ? null : <p>{render.ability}</p> }
                        { render.experience == '' ? null : <p className="fst-italic" style={{color: "#0693e3"}}>{render.experience}</p> }
                        { render.certificate == '' ? null : <p style={{color: "lightgreen"}}>{render.certificate}</p> }
                    </div> 
                )  
            },
            width: '35%'
        }
    ]
        
    return (
        <div className="member">
            <>
                <h4 className="text-center fw-bold">歷屆幹部（Past Officers）</h4>
                <Table columns={terms_tableColumns} dataSource={TermsTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">社團指導老師（Club Advisors）</h4>
                <Table columns={tableColumns} dataSource={AdvisorsTableItem} pagination={false} bordered></Table>
            </>
        </div>
    )
}
