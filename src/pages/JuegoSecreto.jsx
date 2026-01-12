import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const JuegoSecreto = () => {
    const { language } = useLanguage();
    const t = translations[language].juegoSecreto;

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
                        <h2>{t.title}</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p1 }}></p>

                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p2 }}></p>

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
