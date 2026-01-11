import React from 'react';

const GifsApp = () => {
    return (
        <section className="gifs-app">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0 d-flex justify-content-around">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/gifs.png" className="img-fluid shadow" alt="GifsApp" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/Gifs2.png" className="img-fluid shadow" alt="GifsApp" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>Gifs App</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2"><strong>Gifs App</strong> es una aplicación desarrollada en <strong>Angular</strong> que permite buscar y visualizar
                            <strong>GIFs</strong> utilizando la <strong>API de GIPHY</strong>. Los usuarios pueden realizar búsquedas de GIFs y
                            ver los resultados de forma dinámica. Además, la aplicación utiliza <strong>localStorage</strong> para guardar un
                            historial de búsquedas, lo que permite a los usuarios acceder rápidamente a sus consultas anteriores.</p>

                        <p className="mb-2">El proyecto hace uso de <strong>Angular</strong> para la creación de la interfaz y la lógica del frontend,
                            aprovechando su arquitectura de componentes y servicios. La integración con la <strong>API de GIPHY</strong> se
                            realiza a través de llamadas HTTP para obtener los GIFs en tiempo real. El uso de <strong>localStorage</strong>
                            facilita la persistencia del historial de búsquedas, proporcionando una experiencia de usuario más personalizada y
                            eficiente.</p>

                        <a href="https://github.com/bnhdez/Gifs-App.git" target="_blank" rel="noreferrer"><i className="icon-github"></i></a>
                        <a href="https://bnhdez.github.io/Gifs-App/" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GifsApp;
