import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../component/Header";
import { Navbar } from "../component/Navbar";
import Logo from "../assets/logo.jpg"
import { Marquee } from "../component/Marquee";

export function RootLayout(){
    return (
        <div className="w-100 h-100 bg-black">
            <Container>
                <Header></Header>
            </Container>
            <hr className="bg-white m-0" style={{padding: "0.05rem"}}></hr>
            <Container>
                <Navbar></Navbar>
                <Row className="w-100 d-flex flex-column flex-md-row py-5">
                    <Col sm={12} lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col sm={12} lg={3} className="d-flex flex-column gap-5">
                        <div className="border border-1 w-100 p-3" style={{borderColor: "#ffffff33"}}>
                            <img className="w-100 h-auto" src={Logo}></img>
                        </div>
                        <div className="border border-1 w-100 p-4">
                            <h6 className="fw-bold mb-3">公告</h6>
                            <Marquee />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}