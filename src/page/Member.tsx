import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export function Member(){
    const OfficersTableItem = [
        {
            key: '1',
            name: "Adb2",
            role: "社長",
            coAdvisor: '',
            experience: "Pre-exam 2025 14 名",
            certificate: "",
            //website: ""
        },
        {
            key: '2',
            name: "dkri3c1",
            role: "副社長",
            coAdvisor: '',
            experience: "成大資安社",
            certificate: "",
            website: "https://dkri3c1.github.io/"
        },
        {
            key: '3',
            name: "lywslc",
            role: "秘書",
            coAdvisor: '',
            experience: "GiCS尋找資安女婕思-資安組：2023(第一名)、2024(第二名)、2025(第一名)",
            certificate: "",
            //website: ""
        },
        {
            key: '4',
            name: "robert_liao",
            role: "總務",
            coAdvisor: '',
            experience: "NTUT islab crypto 組組長",
            certificate: "",
            website: "https://github.com/robert-liao"
        },
        {
            key: '5',
            name: "young_lee",
            role: "活動",
            coAdvisor: '',
            experience: "MyFirstCTF 2025 銀獎",
            certificate: "",
            website: "https://github.com/youngleetw"
        },
        {
            key: '6',
            name: "ypp",
            role: "教學",
            coAdvisor: '',
            experience: "NTUT islab PWN 組組長",
            certificate: "",
            website: "https://github.com/yPin9"
        },
        {
            key: '7',
            name: "Guan4Tou2",
            role: "場地",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "https://guan4tou2.github.io/"
        },
        {
            key: '8',
            name: "VV1NN",
            role: "公關",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "https://github.com/VV1NN"
        },
        {
            key: '9',
            name: "WIFI",
            role: "宣傳",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "https://github.com/WIFI0000"
        },
        {
            key: '10',
            name: "Paul",
            role: "器材",
            coAdvisor: '',
            experience: 'NTUT islab Reverse 組組長',
            certificate: '',
            website: "https://github.com/paulwang19"
        }
    ]

    const CoreTableItem = [
        {
            key: '0',
            name: "stwater20",
            role: "國立臺北科技大學資訊工程系",
            coAdvisor: '',
            experience: "",
            certificate: "",
            website: "https://sectools.tw/about/sean"
        },
        {
            key: '1',
            name: "c1ydehhx",
            role: "資訊技術顧問",
            coAdvisor: '',
            experience: "Pico CTF 299/69579 (<5%) SOLO",
            certificate: "",
            website: "https://www.c1ydeh.net/"
        },
        {
            key: '2',
            name: "FromKeyToEnd",
            role: "",
            coAdvisor: '',
            experience: "",
            certificate: "",
            //website: ""
        },
        {
            key: '3',
            name: "pudding483",
            role: "臺北科技大學資訊安全碩士學位學程",
            coAdvisor: '',
            experience: "NTUT islab WEB 組組長",
            certificate: "",
            website: "https://github.com/pudding483"
        },
        {
            key: '4',
            name: "Yueric",
            role: "臺北科技大學資訊安全碩士學位學程",
            coAdvisor: '',
            experience: "AIS3 好厲駭第九、十屆學員",
            certificate: "",
            website: "https://github.com/Eric-0522"
        },
        {
            key: '5',
            name: "Jun-an",
            role: "臺北科技大學資訊安全碩士學位學程",
            coAdvisor: '',
            experience: "2024 AIS3 新型態資安暑期課程、第九屆 AIS3 好厲駭 高階學員培訓",
            certificate: "",
            website: "https://github.com/Kuo-1025"
        },
		{
            key: '6',
            name: "yeyeye",
            role: "臺北科技大學資訊工程所",
            coAdvisor: '',
            experience: '',
            certificate: '',
            website: "https://github.com/yeyeye0618"
        },
        {
            key: '7',
            name: "mlgzackfly",
            role: "臺北科技大學資訊安全碩士學位學程",
            coAdvisor: '',
            experience: '第十屆AIS3好厲駭 學員（導師培訓）、2024 離島盃資安競賽 大專組（第 5 名）、2023 資安技能金盾獎（入圍決賽）',
            certificate: '',
            website: "https://mlgzackfly.com"
        },
		{
            key: '8',
            name: "lienliensee",
            role: "臺北科技大學資訊安全碩士學位學程",
            coAdvisor: '',
            experience: 'HITCON Cyber Range 2024 第1名 、HOLMES CTF 2025 385/7800(<5%)',
            certificate: '',
            website: ""
        }
    ]
    
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
                <h4 className="text-center fw-bold">社團幹部（Club Officers）</h4>
                <Table columns={officers_tableColumns} dataSource={OfficersTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">核心成員（Core Members）</h4>
                <Table columns={core_tableColumns} dataSource={CoreTableItem} pagination={false} bordered></Table>
            </>
            <hr></hr>
            <>
                <h4 className="text-center fw-bold">社團指導老師（Club Advisors）</h4>
                <Table columns={tableColumns} dataSource={AdvisorsTableItem} pagination={false} bordered></Table>
            </>
        </div>
    )
}
