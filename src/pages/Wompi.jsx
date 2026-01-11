import React from 'react';

const Wompi = () => {
    return (
        <section className="wompi">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="row row-cols-2">
                            <div className="col">
                                <img src="/img/projects/wompi-login.png" className="img-fluid shadow" alt="Wompi Login" />
                            </div>
                            <div className="col">
                                <img src="/img/projects/wompi-mobile.png" className="img-fluid shadow" alt="Wompi Mobile" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="row gap-md-4">
                            <div className="col-md-12 col-6">
                                <img src="/img/projects/wompi.png" className="img-fluid shadow" alt="Wompi" />
                            </div>
                            <div className="col-md-12 col-6">
                                <img src="/img/projects/wompi-registro.png" className="img-fluid shadow" alt="Wompi Register" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>Wompi</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2">En el proyecto <strong>Wompi</strong>, trabajé como desarrollador frontend en <strong>Bitworks</strong>, colaborando estrechamente con
                            programadores backend para traer y desplegar datos en el frontend de manera dinámica. Mi rol principal consistía en
                            implementar los diseños proporcionados por el equipo de <strong>Bancolombia</strong>, creados por un diseñador UX/UI en
                            Figma. Una vez entregados, los convertía en código utilizando <strong>HTML</strong>, <strong>CSS</strong>, <strong>SASS</strong>, <strong>Bootstrap</strong>, y <strong>media queries</strong> para asegurar una correcta visualización en distintos dispositivos.</p>

                        <p className="mb-2">Además, implementaba alertas con <strong>SweetAlert</strong> para mejorar la experiencia del usuario y gestionaba notificaciones
                            por correo electrónico utilizando plantillas <strong>SendGrid</strong>. Todos mis cambios eran revisados a través de pull
                            requests para asegurar la calidad y el cumplimiento de los estándares de diseño establecidos por el equipo de
                            Wompi. Durante el proyecto, siempre respeté las iconografías y directrices originales del equipo de <strong>Bancolombia</strong>
                            para mantener la coherencia con la marca.</p>
                        <a href="https://wompi.sv/" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wompi;
