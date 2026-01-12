import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const MueblesCorp = () => {
    const { language } = useLanguage();
    const t = translations[language].mueblesCorp;

    return (
        <section className="muebles">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-6 d-flex justify-content-around">
                    <div className="col-md-3 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/MueblesCorpMobile.png" className="img-fluid shadow" alt="Muebles Mobile" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <div className="row gap-md-4">
                            <div className="col-md-12 col-6">
                                <img src="/img/projects/muebles.png" className="img-fluid shadow" alt="Muebles Corp" />
                            </div>
                            <div className="col-md-12 col-6">
                                <img src="/img/projects/MueblesCorpContact.png" className="img-fluid shadow" alt="Muebles Corp Contact" />
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

                        <a href="https://github.com/bnhdez/Empresa-Form-Contact.git" target="_blank" rel="noreferrer"><i className="icon-github"></i></a>
                        <a href="https://muebles-corp-enegbbeka2b2amg6.canadacentral-01.azurewebsites.net/" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MueblesCorp;
