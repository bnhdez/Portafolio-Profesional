import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();

    // Porting NavbarModule logic
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Also port NavigationHeight logic from main.js here
        const updatePadding = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                const height = navbar.offsetHeight;
                document.documentElement.style.setProperty('--scroll-padding', `${height}px`);
            }
        };

        updatePadding();
        window.addEventListener('resize', updatePadding);

        // Also Offcanvas logic - make sure it works.
        // The original script manually handled display: block/none on show/hide?
        // Bootstrap usually handles this. Let's assume bootstrap js handles it fine.
        // But if needed we can add event listeners.

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updatePadding);
        };
    }, []);

    // Scroll to top on route change (except for hash links)
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
