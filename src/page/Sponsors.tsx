import datas from "../assets/sponsors.json"

export function Sponsors(){
    return (
        <>
            <h4 className="text-center fw-bold">贊助單位(人)</h4>
            <table className="table-bordered">
                {datas.map(data => {
                    return (
                        <tr>
                            <td className="w-50 border border-1 p-3">
                                <p>{data.title}</p>
                            </td>
                            <td className="w-100 border border-1 p-3">
                                {data.descriptions.map(description => {
                                    return <p>{description}</p>
                                })}
                            </td>
                            <td className="w-50 border border-1 p-3">
                                <p>{data.time}</p>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}
