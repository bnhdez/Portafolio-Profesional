import React from 'react';

const Robot = () => {
    return (
        <section className="robot">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0">
                    <div className="col-md-6">
                        {/* Video */}
                        <div className="video ratio ratio-16x9" style={{maxWidth: '1000px'}}>
                            <iframe src="https://www.youtube.com/embed/AF13mTBI9Yc" title="YouTube video player" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center justify-content-center">
                                <img src="/img/projects/Rescue_Robot.png" alt="Robot de rescate" className="img-fluid shadow" />
                            </div>
                            <div className="col-6">
                                <img src="/img/projects/prototipo.jpg" alt="prototipo" className="img-fluid shadow" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <h2>Dispositivo de rueda de un Robot Móvil, capaz de cirular por terrenos irregulares y superar obstáculos</h2>
                    </div>
                    <div className="col-md-6">
                        <p className="mb-2">El proyecto "Robot Móvil" es una solución innovadora en movilidad robótica, diseñada para transitar por terrenos
                        irregulares y superar obstáculos. Se basa en un dispositivo de rueda equipado con patas dispuestas de forma
                        circunferencial y un sistema de suspensión adaptable, que en conjunto optimizan la tracción y estabilidad del robot en
                        entornos complejos. La propuesta utiliza tecnologías avanzadas de mecatrónica, transmisión de potencia y materiales flexibles, lo que
                        permite ofrecer una alternativa accesible y eficiente en comparación con las soluciones robóticas tradicionales. Además,
                        el desarrollo del proyecto fue llevado a cabo por un equipo multidisciplinario—integrado por diseñadores, programadores
                        y gestores de proyectos—que combinó sus conocimientos para abordar necesidades en sectores críticos como rescate,
                        agricultura, vigilancia y exploración.</p>

                        <p className="mb-2">El valor innovador del proyecto ha sido reconocido con importantes premios:</p>

                        <ul className="ps-3">
                            <li>
                                Tercer lugar en el concurso "Generación de Ideas Disruptivas (GID) – Versión 2"
                            </li>
                            <li>
                                Segundo lugar en el Certamen de Investigación e Innovación – Cátedra Ciclo II 2023, UEES.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Robot;
