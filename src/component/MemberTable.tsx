import { Table } from "antd";
import { ColumnType } from "antd/es/table";

export type Person = {
    name: string
    role: string
    experience?: string
    certificate?: string
    website?: string
}

export function PersonName(props: { person?: Person }){
    if(props.person === undefined){
        return <p>-</p>
    }
    return props.person.website ? <a href={props.person.website}>{props.person.name}</a> : <p>{props.person.name}</p>
}

export function MemberTable(props: {
    people: Person[]
    roleTitle: string
    experienceTitle: string
}){
    const columns: ColumnType<Person>[] = [
        {
            title: "姓名",
            key: "name",
            width: '15%',
            render: (_text: string, person: Person) => <PersonName person={person} />
        },
        {
            title: props.roleTitle,
            key: "role",
            width: '15%',
            render: (_text: string, person: Person) => <p>{person.role}</p>
        },
        {
            title: props.experienceTitle,
            key: "experience",
            width: '35%',
            render: (_text: string, person: Person) => {
                return (
                    <div className="d-flex flex-column">
                        { person.experience ? <p className="fst-italic" style={{color: "#0693e3"}}>{person.experience}</p> : null }
                        { person.certificate ? <p style={{color: "lightgreen"}}>{person.certificate}</p> : null }
                    </div>
                )
            }
        }
    ]

    return <Table columns={columns} dataSource={props.people} rowKey="name" pagination={false} bordered></Table>
}
