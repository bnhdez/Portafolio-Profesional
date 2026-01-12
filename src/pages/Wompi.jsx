import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Wompi = () => {
    const { language } = useLanguage();
    const t = translations[language].wompi;

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
                        <h2>{t.title}</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p1 }}></p>

                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p2 }}></p>
                        <a href="https://wompi.sv/" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wompi;
