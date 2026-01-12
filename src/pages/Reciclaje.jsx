import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Reciclaje = () => {
    const { language } = useLanguage();
    const t = translations[language].reciclaje;

    return (
        <section className="reciclaje">
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
                        <h2>{t.title}</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p1 }}></p>

                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p2 }}></p>

                        <a href="https://github.com/bnhdez/Basura-Python.git" target="_blank" rel="noreferrer"><i
                                className="icon-github"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reciclaje;
