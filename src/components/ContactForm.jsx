import React, { useState, useEffect } from 'react';

const ContactForm = () => {
    const [result, setResult] = useState('');
    const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        setStatus('loading');
        setResult('Please wait...');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setResult(data.message);
                form.reset();
            } else {
                setStatus('error');
                setResult(data.message || 'An error occurred.');
            }
        } catch (error) {
            setStatus('error');
            setResult('Something went wrong!');
            console.error(error);
        } finally {
            setTimeout(() => {
                setResult('');
                setStatus(null);
            }, 3000);
        }
    };

    return (
        <form className="contact-form px-4 py-md-4 py-3" onSubmit={handleSubmit} id="form">
            <input type="hidden" name="access_key" value="d90b6c84-07d1-453b-97ce-4e4d8bf5246d" />

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" name="name" className="form-control" id="nombre" placeholder="Nombre Completo" required />
            </div>

            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="email" name="email" className="form-control" id="correo" placeholder="email@correo.com" required />
            </div>

            <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Comentario o mensaje</label>
                <textarea className="form-control" name="message" id="mensaje" rows="4" placeholder="Hola..." required></textarea>
            </div>

            {result && <div id="result" className="mb-3">{result}</div>}

            <div className="text-center text-md-start">
                <button type="submit" className="btn btn-dark">Enviar</button>
            </div>
        </form>
    );
};

export default ContactForm;
