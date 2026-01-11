import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="d-flex justify-content-center align-items-center gap-1">
                <i className="icon-copy-right"></i>
                <p>2025</p>
                <div className="horizontal-divider"></div>
                <p>
                    Diseño y <a target="_blank" href="https://github.com/bnhdez/Portafolio-Profesional.git" rel="noreferrer">código</a> por Boris Hernández
                </p>
            </div>
        </footer>
    );
};

export default Footer;
