import React from 'react';

const JuegoSecreto = () => {
    return (
        <section className="juego-secreto">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0 d-flex justify-content-around">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/secreto.png" className="img-fluid shadow" alt="Secret Game" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>Juego Secreto</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2"><strong>Juego Secreto JS</strong> es un proyecto que utiliza <strong>JavaScript</strong> para crear un juego
                            interactivo basado en la manipulación del <strong>DOM</strong> y el uso de <strong>listas</strong> y
                            <strong>funciones</strong>. El objetivo del juego es adivinar una palabra secreta a partir de pistas, y cuenta con
                            validaciones para asegurar que el jugador ingrese datos válidos. La dinámica del juego permite al usuario
                            interactuar con la interfaz, proporcionando una experiencia divertida y educativa.</p>

                        <p className="mb-2">El proyecto hace uso de listas para gestionar las palabras posibles y utiliza funciones para procesar las
                            interacciones del usuario. Además, se implementan validaciones para verificar que el input del jugador sea correcto,
                            mejorando la jugabilidad y la experiencia.</p>

                        <a href="https://github.com/bnhdez/Juego-Secreto-JS.git" target="_blank" rel="noreferrer"><i
                                className="icon-github"></i></a>
                        <a href="https://bnhdez.github.io/Juego-Secreto-JS/" target="_blank" rel="noreferrer"><i
                                className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JuegoSecreto;
