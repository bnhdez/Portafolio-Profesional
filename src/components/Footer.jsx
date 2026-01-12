import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language].footer;

    return (
        <footer>
            <div className="d-flex justify-content-center align-items-center gap-1">
                <i className="icon-copy-right"></i>
                <p>2025</p>
                <div className="horizontal-divider"></div>
                <p>
                    {t.designBy} <a target="_blank" href="https://github.com/bnhdez/Portafolio-Profesional.git" rel="noreferrer">{t.code}</a> {t.by}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
