import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

const Header = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();
    const t = translations[language].header;

    return (
        <header className="navbar navbar-expand-lg bd-navbar sticky-top p-0">
            <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap primary-navigation p-3">

                <Link to="/">
                    <h2 className="m-0">&lt;BH /&gt;</h2>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu"
                    aria-controls="mobileMenu" aria-label="Toggle navigation">
                    <i className="icon-hamburger-menu"></i>
                </button>

                {/* Desktop */}
                <div className="d-none d-lg-flex align-items-center gap-6">
                    <ul className="navbar-nav header-list gap-6">
                        <li>
                            <HashLink to="/#projects">{t.projects}</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#exp">{t.experience}</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#contact">{t.contact}</HashLink>
                        </li>
                    </ul>

                    <div className="horizontal-divider"></div>

                    <div className="modes">
                        <button type="button" className="btn btn-transparent p-0 fw-bold" onClick={toggleLanguage}>
                            {language === 'ES' ? 'EN' : 'ES'}
                        </button>
                        <button type="button" className="btn btn-transparent" onClick={toggleTheme}>
                            <i className={theme === 'dark' ? "icon-day" : "icon-night"}></i>
                        </button>
                    </div>

                    <div className="horizontal-divider"></div>

                    <a href="/files/BorisHernandez-CV.pdf" download className="btn btn-dark">
                        {t.downloadCV}
                    </a>
                </div>

                {/* Mobile */}
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
                    <div className="offcanvas-header">
                        <Link to="/">
                            <h2 className="m-0">&lt;BH /&gt;</h2>
                        </Link>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column gap-4">
                        <ul className="navbar-nav header-list">
                            <li><HashLink className="nav-link" to="/#projects">{t.projects}</HashLink></li>
                            <li><HashLink className="nav-link" to="/#exp">{t.experience}</HashLink></li>
                            <li><HashLink className="nav-link" to="/#contact">{t.contact}</HashLink></li>
                        </ul>

                        <div className="modes">
                            <button type="button" className="btn btn-transparent p-0 fw-bold" onClick={toggleLanguage}>
                                {language === 'ES' ? 'EN' : 'ES'}
                            </button>
                            <button type="button" className="btn btn-transparent" onClick={toggleTheme}>
                                <i className={theme === 'dark' ? "icon-day" : "icon-night"}></i>
                            </button>
                        </div>

                        <a href="/files/BorisHernandez-CV.pdf" download className="btn btn-dark">
                            {t.downloadCV}
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
