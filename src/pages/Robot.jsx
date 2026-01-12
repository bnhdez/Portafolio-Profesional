import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Robot = () => {
    const { language } = useLanguage();
    const t = translations[language].robot;

    return (
        <section className="robot">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0 d-flex justify-content-around">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="img/projects/Rescue_Robot.png" className="img-fluid shadow" alt="Robot Detail" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="img/projects/robot.png" className="img-fluid shadow" alt="Robot" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>{t.title}</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p1 }}></p>

                        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t.p2 }}></p>

                        <p className="fw-bold">{t.achievements}</p>
                        <ul>
                            {t.list.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Robot;
