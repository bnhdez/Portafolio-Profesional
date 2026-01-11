import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ProjectCarousel from '../components/ProjectCarousel';

const Home = () => {

    useEffect(() => {
        // Handle clipboard copy logic
        const copyBtns = document.querySelectorAll('.copy-btn');
        const toastEl = document.getElementById('copyToast');
        // We assume bootstrap is loaded via npm package import in main.jsx
        // However, we might need to import Toast from bootstrap to use it programmatically if we want to be safe,
        // or rely on window.bootstrap if it's attached.
        // Since we imported 'bootstrap/dist/js/bootstrap.bundle.min.js', window.bootstrap should be available or we can import it.

        // Let's use dynamic import or assume it's global if we want to use the JS API.
        // But importing 'bootstrap' in main.jsx usually attaches it to window? No, not always in module systems.
        // It's better to import Toast from bootstrap.

        // However, for simplicity and ensuring it works like legacy, I'll rewrite the logic using React state if possible,
        // OR just simple DOM manipulation if I want to keep it "legacy-like".
        // But the "correct" React way is to use a state for the toast.

        // Let's use a simple DOM approach for now as it's easier to port from existing script.

        const handleCopy = async (e) => {
            const btn = e.currentTarget;
            const textToCopy = btn.getAttribute('data-copy');

            try {
                await navigator.clipboard.writeText(textToCopy);

                // Show toast
                // We need to import Toast from bootstrap.
                // Since I cannot easily import it here without potentially increasing bundle size or configuration issues,
                // I will try to access it from window if available, or just use a simple state based toast.

                // Let's implement a simple React Toast component or just toggle a class.
                // But the HTML structure has a toast container.

                // Let's use the window.bootstrap if available (it might be if I assigned it in main).
                // If not, I'll fallback to a simple visibility toggle.

                if (window.bootstrap) {
                    const toast = new window.bootstrap.Toast(toastEl);
                    toast.show();
                } else {
                    // Fallback manual show
                    toastEl.classList.add('show');
                    setTimeout(() => toastEl.classList.remove('show'), 2500);
                }

            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        };

        copyBtns.forEach(btn => btn.addEventListener('click', handleCopy));

        return () => {
            copyBtns.forEach(btn => btn.removeEventListener('click', handleCopy));
        };
    }, []);

    return (
        <>
            {/* Home */}
            <section className="home">
                <div className="max-80 mx-auto px-3">
                    <div className="row gap-4">
                        <div className="col-md-7 order-1 order-md-0">
                            <div className="d-flex flex-column gap-4">
                                <div className="d-flex flex-column gap-2">
                                    <h1>Hola, soy Boris</h1>
                                    <p className="mb-3">
                                        Soy un Frontend Developer con pasión por el diseño web y la creación de interfaces interactivas y responsivas. Con
                                        experiencia en React.js, Angular, TypeScript y .NET, me especializo en desarrollar soluciones eficientes y atractivas
                                        para la web. Actualmente, formo parte de Bitworks, donde he trabajado en el rediseño de plataformas digitales
                                        innovadoras.
                                    </p>
                                    <p>
                                        Me encanta combinar la creatividad con la tecnología, aplicando metodologías ágiles (Scrum) y las mejores prácticas de
                                        desarrollo para llevar cada proyecto al siguiente nivel.
                                    </p>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex gap-2">
                                        <i className="icon-location"></i>
                                        <p >Santa Tecla, El Salvador</p>
                                    </div>
                                    <div className="d-flex gap-2 ms-1">
                                        <i className="icon-dot text-success" style={{fontSize: '0.625rem'}}></i>
                                        <p>Disponible para nuevos proyectos</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-2">
                                    <a className="btn btn-transparent p-0" target="_blank" href="https://github.com/bnhdez" rel="noreferrer">
                                        <i className="icon-github"></i>
                                    </a>
                                    <a className="btn btn-transparent p-0" target="_blank" href="https://www.linkedin.com/in/borishdez/" rel="noreferrer">
                                        <i className="icon-linkedin"></i>
                                    </a>
                                    <a className="btn btn-transparent p-0" target="_blank" href="https://www.bento.me/bor1s" rel="noreferrer">
                                        <i className="icon-cuenta-de-usuario"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 order-0 order-md-1 d-flex justify-content-md-end justify-content-center">
                            <div className="d-flex justify-content-end align-items-center profile">
                                <img src="/img/profile.jpg" alt="profile" />
                                <div className="bg-profile"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tecnologias */}
            <section className="tecnologias">
                <div className="max-80 mx-auto px-3">
                    <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                        <span className="badge text-bg-secondary">
                            <p>Tecnologias</p>
                        </span>
                        <p className="text-center" style={{maxWidth: '26rem'}}>Estas son las herramientas y tecnologías en las que tengo experiencia y dominio:</p>
                    </div>
                    <div className="technologies-grid mt-4">
                        <div className="tech-item">
                            <img src="/img/logos/javascript.svg" alt="Javascript" className="tech-icon" />
                            <p>Javascript</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/jquery.svg" alt="JQuery" className="tech-icon" />
                            <p>JQuery</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/css.svg" alt="CSS" className="tech-icon" />
                            <p>CSS</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/sass.svg" alt="Sass/Scss" className="tech-icon" />
                            <p>Sass/Scss</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/bootstrap.svg" alt="Bootstrap" className="tech-icon" />
                            <p>Bootstrap</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/radzen.svg" alt="Radzen" className="tech-icon" />
                            <p>Radzen</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/blazor.svg" alt="Blazor" className="tech-icon" />
                            <p>Blazor</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/net.svg" alt="NET" className="tech-icon" />
                            <p>.NET</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/c.svg" alt="C#" className="tech-icon" />
                            <p>C#</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/typescript.svg" alt="TypeScript" className="tech-icon" />
                            <p>TypeScript</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/react.svg" alt="React" className="tech-icon" />
                            <p>React</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/angular.png" alt="Angular" className="tech-icon" />
                            <p>Angular</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/java.svg" alt="Java" className="tech-icon" />
                            <p>Java</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/springboot.svg" alt="Springboot" className="tech-icon" />
                            <p>Springboot</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/mysql.svg" alt="MySQL" className="tech-icon" />
                            <p>MySQL</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/postgresql.svg" alt="PostgreSQL" className="tech-icon" />
                            <p>PostgreSQL</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/git.svg" alt="Git" className="tech-icon" />
                            <p>Git</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/figma.svg" alt="Figma" className="tech-icon" />
                            <p>Figma</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/canva.svg" alt="Canva" className="tech-icon" />
                            <p>Canva</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/photoshop.svg" alt="Photoshop" className="tech-icon" />
                            <p>Photoshop</p>
                        </div>

                        <div className="tech-item">
                            <img src="/img/logos/ilustrador.svg" alt="Illustrator" className="tech-icon" />
                            <p>Illustrator</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proyectos */}
            <section className="proyectos" id="projects">
                <div className="max-80 mx-auto px-3">
                    <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                        <span className="badge text-bg-secondary">
                            <p>Proyectos</p>
                        </span>
                        <p className="text-center">Algunos de los proyectos notables que he construido:</p>
                    </div>
                    <ProjectCarousel />
                </div>
            </section>

            {/* Experiencia */}
            <section className="experiencia" id="exp">
                <div className="max-80 mx-auto px-3">
                    <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                        <span className="badge text-bg-secondary">
                            <p>Experiencia</p>
                        </span>
                        <p className="text-center mb-4" style={{maxWidth: '26rem'}}>A continuación, un vistazo rápido a mis experiencias más recientes:</p>
                    </div>
                    <div className="d-flex flex-column gap-5">
                        <div className="card">
                            <div className="w-md-25 order-0">
                                <img src="/img/logos/bitworks.png" alt="Bitworks" />
                            </div>
                            <div className="d-flex flex-column gap-3 w-md-50 order-2 order-md-1">
                                <h5>Diseñador Web</h5>
                                <ul>
                                    <li>Responsable del diseño y desarrollo de interfaces web responsivas en el frontend.</li>
                                    <li>Colaboro con equipos de backend bajo la metodología Scrum, completando tareas asignadas a través de sprints semanales y
                                    reuniones diarias.</li>
                                    <li>Mantenimiento y optimización de sitios web existentes, agregando nuevas funcionalidades o corrigiendo errores según
                                    fuera necesario.</li>
                                    <li>Trabajar en equipo con otros desarrolladores en un entorno Ágil.</li>
                                </ul>
                            </div>
                            <div className="w-md-25 order-1 order-md-2">
                                <p className="text-md-end">Jul 2024 - Presente</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="d-flex w-md-25 order-0">
                                <div className="d-flex align-items-center justify-content-start h-fit gap-3">
                                    <img src="/img/logos/att.png" className="callcenter" alt="AT&T" />
                                    <div className="horizontal-divider"></div>
                                    <img src="/img/logos/tp.png" className="tp" alt="Teleperformance" />
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 w-md-50 order-2 order-md-1">
                                <h5>Customer Service Agent</h5>
                                <ul>
                                    <li>Gestión de información personal y resolución de problemas de conectividad y redes.</li>
                                    <li>Atendí consultas y quejas telefónicas siguiendo los procedimientos operativos estándar.</li>
                                    <li>Brindé información sobre productos a los clientes, respondiendo sus preguntas y resolviendo sus inquietudes</li>
                                </ul>
                            </div>
                            <div className="w-md-25 order-1 order-md-2">
                                <p className="text-md-end">Jun 2022 - Dic 2022</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="d-flex w-md-25 order-0">
                                <div className="d-flex align-items-center justify-content-start h-fit gap-3">
                                    <img src="/img/logos/cricket.png" className="callcenter" alt="Cricket Wireless" />
                                    <div className="horizontal-divider"></div>
                                    <img src="/img/logos/tp.png" className="tp" alt="Teleperformance" />
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 w-md-50 order-2 order-md-1">
                                <h5>Customer Service Agent</h5>
                                <ul>
                                    <li>Desarrollé sólidas habilidades de comunicación al interactuar con clientes de diversos antecedentes</li>
                                    <li>Apliqué técnicas de resolución de problemas para abordar y solucionar rápidamente las quejas de los clientes de manera
                                    profesional.</li>
                                    <li>Procesé pagos de manera eficiente, proporcionando recibos detallados a los clientes.</li>
                                </ul>
                            </div>
                            <div className="w-md-25 order-1 order-md-2">
                                <p className="text-md-end">Nov 2020 - Ene 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contacto */}
            <section className="contacto" id="contact">
                <div className="max-80 mx-auto px-3">
                    <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                        <span className="badge text-bg-secondary">
                            <p>Contacto</p>
                        </span>
                        <p className="text-center mb-4" style={{maxWidth: '44rem'}}>No dudes en comunicarte conmigo si estás buscando un desarrollador, tienes alguna consulta o simplemente quieres
                        conectarte.</p>
                    </div>
                    <div className="row justify-content-center gap-md-4">
                        <div className="col-md-6 d-flex justify-content-center align-items-center">
                            <div className="d-flex flex-column gap-6">

                                <div className="d-flex flex-column align-items-center gap-md-3">
                                    <div className="d-flex flex-column gap-3 contact-copy">
                                        <div className="d-flex align-items-center gap-3">
                                            <i className="icon-linkedin"></i>
                                            <h2 className="m-0">www.linkedin.com/in/borishdez</h2>
                                            <button className="btn btn-transparent copy-btn p-0" data-copy="https://www.linkedin.com/in/borishdez">
                                                <i className="icon-copy"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-3 contact-copy">
                                        <div className="d-flex align-items-center gap-3">
                                            <i className="icon-mail" style={{fontSize: '1.5rem'}}></i>
                                            <h2 className="m-0">borisnandez93@gmail.com</h2>
                                            <button className="btn btn-transparent copy-btn p-0" data-copy="borisnandez93@gmail.com">
                                                <i class="icon-copy"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-3 contact-copy">
                                        <div className="d-flex align-items-center gap-3">
                                            <i className="icon-whatsapp" style={{fontSize: '2.25rem'}}></i>
                                            <h2 className="m-0">+503 6317-3116</h2>
                                            <button className="btn btn-transparent copy-btn p-0" data-copy="+50363173116">
                                                <i className="icon-copy"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-none d-md-flex flex-column align-items-center contact-socials gap-3">
                                    <p>Visita mis otras redes sociales!</p>
                                    <div className="d-flex gap-2">
                                        <a className="btn btn-transparent p-0" target="_blank" href="https://www.bento.me/bor1s" rel="noreferrer">
                                            <i className="icon-cuenta-de-usuario"></i>
                                        </a>
                                        <a className="btn btn-transparent p-0" target="_blank" href="https://github.com/bnhdez" rel="noreferrer">
                                            <i className="icon-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <ContactForm />

                            <div className="d-flex d-md-none flex-column align-items-center contact-socials mt-4 gap-3">
                                <p>Visita mis otras redes sociales!</p>
                                <div className="d-flex gap-2">
                                    <a className="btn btn-transparent p-0" href="https://www.bento.me/bor1s" rel="noreferrer">
                                        <i className="icon-cuenta-de-usuario"></i>
                                    </a>
                                    <a className="btn btn-transparent p-0" href="https://github.com/bnhdez" rel="noreferrer">
                                        <i className="icon-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="toast-container">
                <div id="copyToast" className="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive"
                    aria-atomic="true" data-bs-delay="2500" data-bs-autohide="true">
                    <div className="d-flex">
                        <div className="toast-body">
                            ¡Copiado al portapapeles!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
