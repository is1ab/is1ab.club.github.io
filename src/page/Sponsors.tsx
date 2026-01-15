import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import datas from "../assets/sponsors.json"

export function Sponsors(){
    const columns: ColumnType<any>[] = [
        {
            key: 'title',
            dataIndex: 'title',
            title: "時間",
            width: "30%"
        },
        {
            key: 'descriptions',
            dataIndex: 'descriptions',
            title: "贊助者",
            width: "70%",
            render: (descriptions: string[]) => {
                return (
                    <>
                        {descriptions.map((description, idx) => (
                            <p key={idx} style={{ margin: 0 }}>{description}</p>
                        ))}
                    </>
                )
            }
        }
    ]

    const tableData = datas.slice(1).map((data, index) => ({
        ...data,
        key: index
    }))

    return (
        <div className="w-100">
            <h4 className="text-center fw-bold">贊助單位(人)</h4>
            <Table columns={columns} dataSource={tableData} pagination={false} bordered />
        </div>
    )
}
