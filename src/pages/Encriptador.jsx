import React from 'react';

const Encriptador = () => {
    return (
        <section className="encriptador">
            <div className="max-80 mx-auto px-3">
                <div className="row gap-4 gap-md-0 d-flex justify-content-around">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/encriptador.png" className="img-fluid shadow" alt="Encriptador" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="/img/projects/encriptador2.png" className="img-fluid shadow" alt="Encriptador" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-3">
                        <h2>Encriptador Alura</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2"><strong>Encriptador de Texto</strong> es una herramienta web desarrollada durante las primeras etapas del programa
                            <strong>Alura Oracle ONE</strong>. Permite encriptar y desencriptar textos mediante un conjunto de reglas de
                            sustitución específicas utilizando <strong>JavaScript</strong>. La encriptación convierte las vocales en secuencias
                            de caracteres únicas, mientras que la desencriptación revierte el proceso para recuperar el texto original. La
                            herramienta también valida el texto para evitar caracteres especiales, acentos o mayúsculas, y permite copiar el
                            texto al portapapeles.</p>

                        <p className="mb-2">El proyecto es completamente responsivo, adaptándose a dispositivos de escritorio, tabletas y celulares. Además, hace
                            uso del método <strong>replace()</strong> de JavaScript para manipular el texto y guarda un historial de las
                            búsquedas en <strong>console.log</strong>. Esta aplicación es una demostración de cómo se pueden implementar
                            funciones dinámicas para procesar texto de manera eficiente en una plataforma web.</p>

                        <a href="https://github.com/bnhdez/Encriptador-Desencriptador-JS.git" target="_blank" rel="noreferrer"><i className="icon-github"></i></a>
                        <a href="https://bnhdez.github.io/Encriptador-Desencriptador-JS/" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Encriptador;
