import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import { TermData } from "./TermType";

const officers_tableColumns: ColumnType<any>[] = [
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
        title: "職稱",
        render: (_text: string, render: any, _index: number) => {
            return (
                <>
                    <p>{render.joinDate}
                    { render.role !== "" ? <span>{render.role}</span> : null}
                    </p>
                    { render.coAdvisor == "" ? null : <p>－與 <span style={{fontWeight: "800"}}>{render.coAdvisor}</span> 老師共同指導</p> }
                </>
            )
        },
        width: '15%'
    },
    {
        title: "特殊經歷",
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

const core_tableColumns: ColumnType<any>[] = [
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
        title: "單位",
        render: (_text: string, render: any, _index: number) => {
            return (
                <>
                    <p>{render.joinDate}
                    { render.role !== "" ? <span>{render.role}</span> : null}
                    </p>
                    { render.coAdvisor == "" ? null : <p>－與 <span style={{fontWeight: "800"}}>{render.coAdvisor}</span> 老師共同指導</p> }
                </>
            )
        },
        width: '15%'
    },
    {
        title: "特殊經歷",
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

export function TermTemplate({ data }: { data: TermData }){
    return (
        <div className="member">
            <a href="#/Member">← 返回成員列表</a>
            <h3 className="text-center fw-bold">第 {data.term} 屆</h3>
            <>
                <h4 className="text-center fw-bold">社團幹部（Club Officers）</h4>
                <Table columns={officers_tableColumns} dataSource={data.officers} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">核心成員（Core Members）</h4>
                <Table columns={core_tableColumns} dataSource={data.coreMembers} pagination={false} bordered></Table>
            </>
        </div>
    )
}
