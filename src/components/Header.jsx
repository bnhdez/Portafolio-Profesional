import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const location = useLocation();

    // Helper to determine if we should use HashLink or regular Link
    // If we are on home page, anchors #id work. If we are on other pages, we need HashLink to go to /#id
    // Actually HashLink works for both cases usually if configured right.

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
                            <HashLink to="/#projects">Proyectos</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#exp">Experiencia</HashLink>
                        </li>
                        <li>
                            <HashLink to="/#contact">Contacto</HashLink>
                        </li>
                    </ul>

                    <div className="horizontal-divider"></div>

                    {/* <div className="modes">
                        <a href="">EN</a>
                        <button type="button" className="btn btn-transparent"><i className="icon-night"></i></button>
                    </div>

                    <div className="horizontal-divider"></div> */}

                    <a href="/files/BorisHernandez-CV.pdf" download className="btn btn-dark">
                        Descargar CV
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
                            <li><HashLink className="nav-link" to="/#projects">Proyectos</HashLink></li>
                            <li><HashLink className="nav-link" to="/#exp">Experiencia</HashLink></li>
                            <li><HashLink className="nav-link" to="/#contact">Contacto</HashLink></li>
                        </ul>

                        {/* <div className="modes">
                            <a href="">EN</a>
                            <button type="button" className="btn btn-transparent">
                                <i class="icon-night"></i>
                            </button>
                        </div> */}

                        <a href="/files/BorisHernandez-CV.pdf" download className="btn btn-dark">
                            Descargar CV
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
