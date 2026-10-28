import Logo from "../assets/logo.jpg"
import { Table } from "antd"
import { MemberArticleType, MemberCertificateType, MemberInternType, MemberParticipateType, MemberCompetitionExperienceType,MemberZeroDayType } from "../type/MemberCertificateType"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export type SampleConfig = {
    zhName: string
    enName: string
    grade: string
}

const titleDateTimeColumns = [
    {
        title: "名稱",
        dataIndex: "title"
    },
    {
        title: "時間",
        dataIndex: "datetime",
        className: "text-center"
    }
]

const experienceColumns = [
    {
        title: "名稱",
        dataIndex: "title"
    },
    {
        title: "排名/獎項",
        dataIndex: "result",
        className: "text-center"
    },
    {
        title: "時間",
        dataIndex: "datetime",
        className: "text-center"
    }
]
const zerodayColumns = [
    {
        title: "標題",
        dataIndex: "title"
    },
    {
        title: "編號",
        dataIndex: "id"
    },
    {
        title: "時間",
        dataIndex: "datetime",
        className: "text-center"
    }
]

const internColumns = [
    {
        title: "公司",
        dataIndex: "company"
    },
    {
        title: "實習內容",
        dataIndex: "info",
    },
    {
        title: "時間",
        dataIndex: "datetime",
        className: "text-center"
    }
]

export const Sample = (props: {
    zhName: string
    enName?: string | undefined
    avatar?: string | undefined
    bio?: string | JSX.Element
    institutes: string[]
    experiences: MemberCompetitionExperienceType[]
    certificates: MemberCertificateType[]
    participates: MemberParticipateType[]
    intern: MemberInternType[]
    journals: MemberArticleType[]
    conferences: MemberArticleType[]
    techConfs: MemberArticleType[]
    zeroday?: MemberZeroDayType[]
}) => {
    const { pathname } = useLocation()
    const experiences = props.experiences.sort((a, b) => b.datetime.toString().includes("now") ? 1 : b.datetime.toString().localeCompare(a.datetime.toString()))
    const certificates = props.certificates.sort((a, b) =>  b.datetime.toString().includes("now") ? 1 : b.datetime.toString().localeCompare(a.datetime.toString()))
    const participates = props.participates.sort((a, b) =>  b.datetime.toString().includes("now") ? 1 : b.datetime.toString().localeCompare(a.datetime.toString()))
    const interns = props.intern.sort((a, b) =>  b.datetime.toString().includes("now") ? 1 : b.datetime.toString().localeCompare(a.datetime.toString()))
    const zerodays = props.zeroday?.sort((a, b) =>  b.datetime.toString().includes("now") ? 1 : b.datetime.toString().localeCompare(a.datetime.toString()))
    const TitleName = () => {
        if(props.enName === undefined){
            return <h1 className="text-white">{props.zhName}</h1>
        }else{
            return <h1 className="text-white">{props.zhName}（{props.enName}）</h1>
        }
    }
    const Article = (props: {
        authors: string,
        title: string,
        target: string,
        details: string,
        doi?: string
    }) => {
        return (
            <>
                <p className="mb-3" style={{fontSize: "calc(0.7rem + .3vw)"}}>{props.authors}, "{props.title}", <span className="fst-italic">{props.target}</span>, {props.details}.
                { props.doi &&
                    <span> doi: <a href={props.doi}>{props.doi}</a></span>
                }
                </p>
            </>
        )
    }
    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: "instant"})
    }, [pathname])
    return (
        <div className="d-flex flex-column" style={{gap: "3rem"}}>
            <div className="w-100 d-flex flex-row">
                <div className="w-100">
                    <div className="p-3 d-flex flex-column flex-xl-row justify-content-center" style={{gap: "1rem"}}>
                        <div className="w-50 d-flex flex-row justify-content-center">
                            <img src={props.avatar === undefined ? Logo : props.avatar} className="rounded" width={"128px"} height={"128px"} style={{objectFit: "cover"}}></img>
                        </div>
                        <div className="w-100 my-auto">
                            <h1 className="text-white"><TitleName></TitleName></h1>
                            {props.institutes.map((institute) => {
                                return <p className="mb-1">{institute}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 d-flex flex-row" style={{gap: "3rem"}}>
                <div className="w-100">
                    <div className="p-3 w-100" style={{backgroundColor: "#7a1b1b"}}>
                        <h5 className="fw-bold text-white m-0">個人簡介</h5>
                    </div>
                    {props.bio &&
                        <div className="p-3 w-100">
                            <p>{props.bio}</p>
                        </div>
                    }
                </div>
            </div>
            { experiences.length > 0 &&
                <div className="w-100 d-flex flex-row" style={{gap: "3rem"}}>
                    
                        <div className="w-100">
                            <div className="p-3 w-100" style={{backgroundColor: "#7a1b1b"}}>
                                <h5 className="fw-bold text-white m-0">比賽經歷</h5>
                            </div>
                            <div className="p-3 w-100">
                                <Table 
                                    columns={experienceColumns} 
                                    dataSource={experiences} 
                                    bordered 
                                    pagination={false}
                                ></Table>
                            </div>
                        </div>
                </div>
            }
            {
                zerodays && zerodays.length > 0 &&
                <div className="w-100 d-flex flex-row" style={{gap: "3rem"}}>
                    <div className="w-100">
                        <div className="p-3 w-100" style={{backgroundColor: "#7a1b1b"}}>
                            <h5 className="fw-bold text-white m-0">ZeroDay</h5>
                        </div>
                        <div className="p-3 w-100">
                            <Table 
                                columns={zerodayColumns} 
                                dataSource={zerodays!} 
                                bordered 
                                pagination={false}
                            ></Table>
                        </div>
                    </div>
                </div>
            }
            { certificates.length > 0 &&
                <div className="w-100 d-flex flex-row" style={{gap: "3rem"}}>
                        <div className="w-100">
                            <div className="p-3 w-100" style={{backgroundColor: "#7a1b1b"}}>
                                <h5 className="fw-bold text-white m-0">資安證照／檢定</h5>
                            </div>
                            <div className="p-3 w-100">
                                <Table 
                                    columns={titleDateTimeColumns} 
                                    dataSource={certificates} 
                                    bordered 
                                    pagination={false}
                                ></Table>
                            </div>
                        </div>
                </div>
            }
            { participates.length > 0 &&
                <div className="w-100 d-flex flex-row" style={{gap: "3rem"}}>
                        <div className="w-100">
                            <div className="p-3 w-100" style={{backgroundColor: "#7a1b1b"}}>
                                <h5 className="fw-bold text-white m-0">活動參與</h5>
                            </div>
                            <div className="p-3 w-100">
                                <Table 
                                    columns={titleDateTimeColumns} 
                                    dataSource={participates} 
                                    bordered 
                                    pagination={false}
                                ></Table>
                            </div>
                        </div>
                </div>
            }
            { interns.length > 0 &&
                <div className="w-100 d-flex flex-row" style={{gap: "3rem"}}>
                        <div className="w-100">
                            <div className="p-3 w-100" style={{backgroundColor: "#7a1b1b"}}>
                                <h5 className="fw-bold text-white m-0">實習經歷</h5>
                            </div>
                            <div className="p-3 w-100">
                                <Table 
                                    columns={internColumns} 
                                    dataSource={interns} 
                                    bordered 
                                    pagination={false}
                                ></Table>
                            </div>
                        </div>
                </div>
            }
            { (props.journals.length > 0 || props.conferences.length > 0 || props.techConfs.length > 0) &&
                <div className="w-100 d-flex flex-row" style={{gap: "3rem"}}>
                    <div className="w-100">
                        <div className="p-3 w-100" style={{backgroundColor: "#7a1b1b"}}>
                            <h5 className="fw-bold text-white m-0">論文發表</h5>
                        </div>
                        { (props.journals.length > 0) &&
                            <div className="p-3 w-100">
                                <h5 className="text-center">期刊論文</h5>
                                <ol>
                                { props.journals.map((journal) => {
                                    return (
                                        <li>
                                            <Article authors={journal.authors} title={journal.title} target={journal.target} details={journal.details} doi={journal.doi} />
                                        </li>
                                    )
                                })}
                                </ol>
                            </div>
                        }
                        { (props.conferences.length > 0) &&
                            <div className="p-3 w-100">
                                <h5 className="text-center">會議論文</h5>
                                <ol>
                                    { props.conferences.map((conference) => {
                                        return (
                                            <li>
                                                <Article authors={conference.authors} title={conference.title} target={conference.target} details={conference.details} doi={conference.doi} />
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        }
                        { (props.techConfs.length > 0) &&
                            <div className="p-3 w-100">
                                <h5 className="text-center">技術會議</h5>
                                <ol>
                                    { props.techConfs.map((conference) => {
                                        return (
                                            <li>
                                                <Article authors={conference.authors} title={conference.title} target={conference.target} details={conference.details} doi={conference.doi} />
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
