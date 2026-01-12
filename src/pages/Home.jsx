import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import ProjectCarousel from '../components/ProjectCarousel';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Home = () => {
    const { language } = useLanguage();
    const t = translations[language].home;

    useEffect(() => {
        // Handle clipboard copy logic
        const copyBtns = document.querySelectorAll('.copy-btn');
        const toastEl = document.getElementById('copyToast');

        const handleCopy = async (e) => {
            const btn = e.currentTarget;
            const textToCopy = btn.getAttribute('data-copy');

            try {
                await navigator.clipboard.writeText(textToCopy);

                if (window.bootstrap) {
                    const toast = new window.bootstrap.Toast(toastEl);
                    toast.show();
                } else {
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
                                    <h1>{t.intro.title}</h1>
                                    <p className="mb-3">
                                        {t.intro.p1}
                                    </p>
                                    <p>
                                        {t.intro.p2}
                                    </p>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex gap-2">
                                        <i className="icon-location"></i>
                                        <p >{t.intro.location}</p>
                                    </div>
                                    <div className="d-flex gap-2 ms-1">
                                        <i className="icon-dot text-success" style={{fontSize: '0.625rem'}}></i>
                                        <p>{t.intro.availability}</p>
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
                                <img src="/img/Me.PNG" alt="Boris Hernández" />
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
                            <p>{t.tech.badge}</p>
                        </span>
                        <p className="text-center" style={{maxWidth: '26rem'}}>{t.tech.desc}</p>
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
                            <p>{t.projects.badge}</p>
                        </span>
                        <p className="text-center">{t.projects.desc}</p>
                    </div>
                    <ProjectCarousel />
                </div>
            </section>

            {/* Experiencia */}
            <section className="experiencia" id="exp">
                <div className="max-80 mx-auto px-3">
                    <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                        <span className="badge text-bg-secondary">
                            <p>{t.experience.badge}</p>
                        </span>
                        <p className="text-center mb-4" style={{maxWidth: '26rem'}}>{t.experience.desc}</p>
                    </div>
                    <div className="d-flex flex-column gap-5">

                        {/* Bitworks */}
                        <div className="card">
                            <div className="w-md-25 order-0">
                                <div className="logos-wrapper">
                                    <img src="/img/logos/bitworks.png" alt="Bitworks" />
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 w-md-50 order-2 order-md-1">
                                <h5>{t.experience.jobs[0].role}</h5>
                                <ul>
                                    {t.experience.jobs[0].desc.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-md-25 order-1 order-md-2">
                                <p className="text-md-end">{t.experience.jobs[0].date}</p>
                            </div>
                        </div>

                        {/* AT&T */}
                        <div className="card">
                            <div className="d-flex w-md-25 order-0">
                                <div className="h-fit gap-3 logos-wrapper">
                                    <img src="/img/logos/att.png" className="callcenter" alt="AT&T" />
                                    <div className="horizontal-divider"></div>
                                    <img src="/img/logos/tp.png" className="tp" alt="Teleperformance" />
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 w-md-50 order-2 order-md-1">
                                <h5>{t.experience.jobs[1].role}</h5>
                                <ul>
                                    {t.experience.jobs[1].desc.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-md-25 order-1 order-md-2">
                                <p className="text-md-end">{t.experience.jobs[1].date}</p>
                            </div>
                        </div>

                        {/* Cricket */}
                        <div className="card">
                            <div className="d-flex w-md-25 order-0">
                                <div className="h-fit gap-3 logos-wrapper">
                                    <img src="/img/logos/cricket.png" className="callcenter" alt="Cricket Wireless" />
                                    <div className="horizontal-divider"></div>
                                    <img src="/img/logos/tp.png" className="tp" alt="Teleperformance" />
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-3 w-md-50 order-2 order-md-1">
                                <h5>{t.experience.jobs[2].role}</h5>
                                <ul>
                                    {t.experience.jobs[2].desc.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-md-25 order-1 order-md-2">
                                <p className="text-md-end">{t.experience.jobs[2].date}</p>
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
                            <p>{t.contact.badge}</p>
                        </span>
                        <p className="text-center mb-4" style={{maxWidth: '44rem'}}>{t.contact.desc}</p>
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
                                                <i className="icon-copy"></i>
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
                                    <p>{t.contact.socials}</p>
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
                                <p>{t.contact.socials}</p>
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
                            {t.contact.toast}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
