import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Member(){
    const phdUserTableItem = [
        {
            key: '1',
            name: "dkri3c1",
            joinDate: "2025.10",
            role: "社長",
            coAdvisor: '',
            experience: "成大資安社",
            certificate: "",
            website: "https://dkri3c1.github.io/"
        },
        {
            key: '2',
            name: "林妍蓁",
            joinDate: "2025.10",
            role: "副社長",
            coAdvisor: '',
            experience: "GiCS尋找資安女婕思-資安組：2023(第一名)、2024(第二名)、2025(第一名)",
            certificate: "",
            website: ""
        },
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
            title: "加入時間",
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
        
    return (
        <div className="member">
            <>
                <h4 className="text-center fw-bold">社團成員（Ph.D. students）</h4>
                <Table columns={tableColumns} dataSource={phdUserTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
        </div>
    )
}
