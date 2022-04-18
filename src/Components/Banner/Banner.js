import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../Assets/BannerImage/banner1.jpg'
import banner2 from '../Assets/BannerImage/banner2.jpg'
import banner3 from '../Assets/BannerImage/banner3.jpg'

const Banner = () => {
    return (
        <div className='h-25'>
            <Carousel fade>
                <Carousel.Item>

                    <img style={{ height: '300px' }}
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark'>Every Bite is Healthy</h3>
                        <p className='text-dark'>Healthy food ensures a healthy life</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '300px' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Follow a Diet Chart</h3>
                        <p>Diet Charts Will Help You To Maintain Daily Food Habit</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '300px' }}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fell The Freshness</h3>
                        <p>Maintain Your food habit with home made food</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;