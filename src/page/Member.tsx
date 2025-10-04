import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Member(){
    const phdUserTableItem = [
        {
            key: '1',
            name: "陳勝舢",
            joinDate: "2022.07",
            role: "博三",
            coAdvisor: '白敦文',
            experience: "奧義智慧科技股份有限公司實習生",
            certificate: "CEH",
            website: "/#/Member/2022/Ryan"
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
            width: '25%'
        },
        {
            title: "特殊經歷&身份",
            render: (_text: string, render: any, _index: number) => {
                return (
                    <div className="d-flex flex-column">
                        { render.ability == '' ? null : <p>{render.ability}</p> }
                        { render.experience == '' ? null : <p className="fst-italic" style={{color: "#0693e3"}}>{render.experience}</p> }
                        { render.certificate == '' ? null : <p style={{color: "lightgreen"}}>{render.certificate}</p> }
                    </div> 
                )  
            },
            width: '25%'
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
