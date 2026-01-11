import React from 'react';

const Reciclaje = () => {
    return (
        <section className="encriptador">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0 d-flex justify-content-around">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/reciclaje.png" className="img-fluid shadow" alt="Reciclaje" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/reciclaje-data.png" className="img-fluid shadow" alt="Graph" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>Detección de Basura - Python</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2">Aplicación avanzada desarrollada en
                            <strong>Python</strong> que utiliza visión por computadora para detectar y clasificar residuos en tiempo real. La
                            interfaz gráfica fue construida utilizando <strong>Tkinter</strong>, mientras que el procesamiento de imágenes y la
                            detección de objetos se realiza mediante el uso de modelos entrenados en <strong>Roboflow</strong> para la
                            identificación precisa de diferentes tipos de basura, como plástico, vidrio, metal, papel y otros.</p>

                        <p className="mb-2">El sistema captura imágenes desde una cámara en vivo, las envía a la plataforma <strong>Roboflow</strong> para la
                            detección de residuos, y luego muestra los resultados en la interfaz. Los modelos fueron entrenados previamente en
                            Roboflow, lo que permite realizar clasificaciones precisas en tiempo real. Los resultados de las clasificaciones,
                            como el conteo de residuos detectados, se almacenan en una base de datos <strong>SQL Server</strong>, y el sistema
                            permite al usuario consultar estadísticas y visualizar un historial de las clasificaciones realizadas. Además, la
                            aplicación ofrece opciones para descargar imágenes y resultados, todo integrado en una solución fácil de usar y
                            completamente responsiva para diversos dispositivos.</p>

                        <a href="https://github.com/bnhdez/Basura-Python.git" target="_blank" rel="noreferrer"><i
                                className="icon-github"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reciclaje;
