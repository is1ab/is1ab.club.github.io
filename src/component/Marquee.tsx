import news from "../assets/news.json"

export function Marquee(){
    return (
        <div className="w-100 overflow-y-hidden" style={{height: "400px"}}>
            <div className="marquee-container">
                <div className="marquee-content">
                        { 
                            news.map((data) => {
                                return <>
                                    <p>賀！{data.people} {data.description}</p>
                                    <br/>
                                </>
                            })
                        }
                        {/* { 
                            news.map((data) => {
                                return <>
                                    <p>賀！{data.people} {data.description}</p>
                                    <br/>
                                </>
                            })
                        }
                        { 
                            news.map((data) => {
                                return <>
                                    <p>賀！{data.people} {data.description}</p>
                                    <br/>
                                </>
                            })
                        } */}
                </div>
            </div>
        </div>
    )
}