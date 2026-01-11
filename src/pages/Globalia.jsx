import React from 'react';

const Globalia = () => {
    return (
        <section className="globalia">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0 d-flex justify-content-around">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/globalia-region.png" className="img-fluid shadow" alt="Globalia Region" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/globalia-detail.png" className="img-fluid shadow" alt="Globalia Detail" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>Globalia</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2"><strong>Globalia</strong> es una aplicación desarrollada en <strong>Angular</strong> que permite buscar información
                            sobre países utilizando la <strong>API REST Countries</strong>. Los usuarios pueden realizar búsquedas según la
                            <strong>capital</strong>, <strong>país</strong> o <strong>región</strong>, y obtener detalles sobre la ubicación y
                            otras características de los países. La aplicación guarda los resultados en <strong>localStorage</strong> para
                            mejorar el rendimiento y almacenar en caché las búsquedas anteriores.</p>

                        <p className="mb-2">La aplicación también hace uso de <strong>Google Street Maps</strong> y <strong>Open Street Maps</strong> para
                            redirigir a la ubicación específica de la búsqueda, permitiendo a los usuarios visualizar un mapa interactivo de la
                            ubicación seleccionada. El proyecto aprovecha las ventajas de <strong>Angular</strong> para estructurar la interfaz
                            de usuario y gestionar las consultas a la API de manera eficiente.</p>

                        <a href="https://github.com/bnhdez/Globalia.git" target="_blank" rel="noreferrer"><i className="icon-github"></i></a>
                        <a href="https://bnhdez.github.io/Globalia" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Globalia;
