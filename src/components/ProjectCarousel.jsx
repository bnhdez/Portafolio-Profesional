import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const ProjectCarousel = () => {
    // Splide options matching legacy/js/carrusel.js
    const options = {
        type: 'loop',
        perPage: 2,
        rewind: true,
        drag: 'free',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    };

    return (
        <section className="splide" aria-label="Carrusel de Proyectos">
            <Splide options={options}>
                <SplideSlide>
                    <Link to="/robot"><img src="/img/projects/robot.png" alt="Robot" /></Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to="/wompi"><img src="/img/projects/wompi.png" alt="Wompi" /></Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to="/muebles-corp"><img src="/img/projects/muebles.png" alt="Muebles Corp" /></Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to="/gifs-app"><img src="/img/projects/gifs.png" alt="Gifs App" /></Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to="/reciclaje"><img src="/img/projects/basura.jpg" alt="Reciclaje" /></Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to="/globalia"><img src="/img/projects/globalia.png" alt="Globalia" /></Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to="/encriptador"><img src="/img/projects/encriptador.png" alt="Encriptador" /></Link>
                </SplideSlide>
                <SplideSlide>
                    <Link to="/juego-secreto"><img src="/img/projects/secreto.png" alt="Juego Secreto" /></Link>
                </SplideSlide>
            </Splide>
        </section>
    );
};

export default ProjectCarousel;
