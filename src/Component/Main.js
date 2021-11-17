import React from "react";
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap'
import sideImage from '../Images/undraw_deliveries_-131-a.svg';
import Section01 from "./Section01";
import Section02 from "./Section02";
import Section03 from "./Section03";

const Main = () => {
    return (
        <div>
            <header>
                <Container className="container text-center">
                    <Row className="row">
                        <Col md={7} sm={12} className="col-md-7 col-sm-12">
                            <h6>AMAZING PRODUCT HUB🛒</h6>
                            <h1>EXCITING ADVENTURE</h1>
                            <p>Are you looking for your desired product?
                                Had a long and busy day! tired of scrolling and high prices? Then <span>E-THRIFT</span>is the right place for you.
                                Whether it is a grocery, fashion, electronics or any kind of your desired product you are browsing for.
                                if you are seeking for best prices with discounts and quality products, there are plenty of certified and assured products waiting to be deliverd to your doorsteps
                            </p>
                            <button class="cta">
                                <span class="hover-underline-animation">Shop now
                                </span>
                                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                                    <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                                </svg>
                            </button>
                        </Col>
                        <Col md={5} sm={12} className="col-md-5 col-sm-12 h-50">
                            <img src={sideImage} alt="sideImage" />
                        </Col>
                    </Row>
                </Container>
            </header>
            <Section01 />
            <Section02 />
            <Section03 />
        </div>
    )
}

export default Main;