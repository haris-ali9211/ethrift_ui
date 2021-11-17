import React from "react";
import { Container, Row } from 'react-bootstrap';
import '../App.css';
import OrderpageCarousel from "./OrderpageCarousel";
import Card from './Card'

const MainPage02 = () => {
    return (
        <div className="text-center ">
            <OrderpageCarousel />
            <main>
                <section class="section-1">
                    <Container>
                        <Row >
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </Row>
                    </Container>
                </section>
            </main>
        </div>
    )
}

export default MainPage02;