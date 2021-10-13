import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo1 from '../../../images/banner/1.jpg';
import logo2 from '../../../images/banner/2.jpg';
import logo4 from '../../../images/banner/4.jpg';


const Banner = () => {
    return (
        <> <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={logo4}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </>
    );
};

export default Banner;