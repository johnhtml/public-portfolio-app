import React from 'react';
import { Carousel } from 'react-bootstrap';

function Carrusel() {
    return (
        <Carousel>
            <Carousel.Item interval={4000}>
                <img
                    className="d-block w-100"
                    src="assets/images/java.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Java</h3>
                    <p>Junior Java developer.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    className="d-block w-100"
                    src="assets/images/python.svg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Python</h3>
                    <p>Junior Python developer.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img
                    className="d-block w-100"
                    src="assets/images/logo.svg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>React</h3>
                    <p>React single page applications development.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrusel;
