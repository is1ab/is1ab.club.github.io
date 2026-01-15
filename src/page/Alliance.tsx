import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Alliances(){
    const alliancesDatas = [
        {
            name: "",
            introduction: "",
            organization: "",
            website: "",
            joinDate: ""
        },
    ]
    const alliancesColumns: ColumnType<any>[] = [
        {
            key: 'name',
            dataIndex: 'name',
            title: "名稱",
            width: "10%",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <>
                        {render.website === undefined ? <p>{render.name}</p> : <a href={render.website}>{render.name}</a>}
                    </>
                )
            }
        },
        {
            key: 'introduction',
            dataIndex: 'introduction',
            title: "簡介",
            width: "25%"
        },
        {
            key: 'organization',
            dataIndex: 'organization',
            title: "單位",
            width: "12%"
        },
        {
            key: 'joinDate',
            dataIndex: 'joinDate',
            title: "加入時間",
            width: "12%"
        },
        {
            key: 'note',
            dataIndex: 'note',
            title: "備註",
            width: "23%",
        },
    ]
    return (
        <div className="w-100">
            <div className="overflow-x-auto">
                <h4 className="text-center fw-bold">社群/社團 聯盟</h4>
                <Table columns={alliancesColumns} dataSource={alliancesDatas} pagination={false} bordered></Table>
            </div>
        </div>
    )
}
