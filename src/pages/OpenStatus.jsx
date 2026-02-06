import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const GifsApp = () => {
    const { language } = useLanguage();
    const t = translations[language].openStatus;

    return (
        <section className="gifs-app">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0 d-flex justify-content-around">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="img/projects/open-status-1.png" className="img-fluid shadow" alt="Open Status" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="img/projects/open-status-2.png" className="img-fluid shadow" alt="Open Status" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>{t.title}</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p1 }}></p>

                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p2 }}></p>

                        <a href="https://github.com/bnhdez/OpenStatus.git" target="_blank" rel="noreferrer"><i className="icon-github"></i></a>
                        <a href="https://www.open-status.observer/" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GifsApp;
