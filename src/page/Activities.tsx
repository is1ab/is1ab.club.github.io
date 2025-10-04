export function Activities(){
    const ActivitiesItem = (props: {
        time: string
        descriptionItem: JSX.Element
    }) => {
        return (
            <tr>
                <td className="border border-1">
                    {props.time}
                </td>
                <td className="border border-1">
                    {props.descriptionItem}
                </td>
            </tr>
        )
    }

    return (
        <div className="activities">
            <h4 className="text-center fw-bold">歷史活動</h4>
            <table className="w-100 table-bordered">
                <ActivitiesItem
                    time="2025.*.*"
                    descriptionItem={
                        <div>
                            <p>敬請期待</p>
                        </div>
                    }
                ></ActivitiesItem>
            </table>
        </div>
    )
}
