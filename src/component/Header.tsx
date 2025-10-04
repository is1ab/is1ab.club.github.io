import { useNavigate } from "react-router-dom"

export function Header(){
    const navigate = useNavigate()
    return (
        <div className="w-100 pt-5 pb-4 rounded">
            <p className="fs-2 fw-bold" onClick={() => navigate("/")} style={{cursor: "pointer"}}>is1ab CLUB</p>
            <h6 className="m-0" ><small style={{color: "#ffffff99"}}>國立臺北科技大學</small></h6>
        </div>
    )
}
