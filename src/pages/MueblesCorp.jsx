import React from 'react';

const MueblesCorp = () => {
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
                        <h2>Muebles Corp</h2>
                    </div>
                    <div className="col-md-9">
                        <p className="mb-2">El proyecto <strong>Muebles Corp</strong> es una aplicación web desarrollada en <strong>ASP.NET Core MVC</strong> que
                            permite gestionar formularios de contacto. Esta app se conecta a una base de datos <strong>SQL Server</strong>
                            mediante <strong>Entity Framework</strong>. Su funcionalidad principal es almacenar y recuperar los datos de los
                            formularios de contacto, que incluyen información como el nombre, correo electrónico y mensaje de los usuarios. Este
                            sistema está diseñado para ofrecer una gestión eficiente de los datos de los clientes, integrándose de manera
                            efectiva con la base de datos para proporcionar un manejo y consulta de información sencillo y rápido.</p>

                        <p className="mb-2">En cuanto a las tecnologías utilizadas, el proyecto emplea <strong>ASP.NET Core MVC</strong> para el desarrollo del
                            frontend y backend, aprovechando el modelo de arquitectura MVC para organizar y separar la lógica de presentación,
                            negocio y acceso a datos. La aplicación se conecta a una base de datos <strong>SQL Server</strong>, y los datos se
                            manejan utilizando <strong>Entity Framework</strong> para facilitar la interacción con la base de datos de manera
                            eficiente. Además, se usan prácticas como la gestión de dependencias a través de <strong>NuGet</strong> y
                            migraciones de base de datos con el comando <strong>Scaffold-DbContext</strong> para mantener el modelo de datos
                            actualizado con los cambios en la estructura de la base de datos.</p>

                        <a href="https://github.com/bnhdez/Empresa-Form-Contact.git" target="_blank" rel="noreferrer"><i className="icon-github"></i></a>
                        <a href="https://muebles-corp-enegbbeka2b2amg6.canadacentral-01.azurewebsites.net/" target="_blank" rel="noreferrer"><i className="icon-external"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MueblesCorp;
