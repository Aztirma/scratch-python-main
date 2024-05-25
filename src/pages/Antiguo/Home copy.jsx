import React from 'react';

const Home = () => {

    return (
        
        <div className="p-4">
            <h1 className="text-4xl font-bold text-blue-600">Presentación del Proyecto</h1>
            <p className="mt-4 ml-8 text-xl">
                El proyecto es un asistente de estudios inteligente diseñado 
                para personas con problemas de visión, 
                enfocado en la enseñanza de programación visual en Python.
                Este asistente permitirá a los usuarios aprender a programar
                de manera sencilla y amigable, a través de la creación de
                programas visuales en Python, haciendo uso de interfaces adaptativas que incluyen
                elementos de audio, táctiles y gráficos de alto contraste, el asistente facilitará
                el aprendizaje de la programación permitiendo a los usuarios comprender estructuras 
                lógicas de programación a través de métodos alternativos y multisensoriales. La
                meta es crear una herramienta inclusiva que no solo mejore la autonomía y el 
                aprendizaje de los usuaiors con disapacidades visuales, sino que también mejore su experiencia
                educativa en el campo de la tecnología


            </p>
            <div className="m-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 shadow-lg rounded-lg bg-white m-4">
                        <h2 className="text-xl font-semibold">Miembro 1</h2>
                        <p>Nombre: Christian Poma Navarro</p>
                        <p>Código: 20191116C</p>
                        <p>Email: christian.poma.n@uni.pe</p>
                    </div>
                    <div className="p-4 shadow-lg rounded-lg bg-white m-4">
                        <h2 className="text-xl font-semibold">Miembro 2</h2>
                        <p>Nombre: Alejandra Zuñiga Chicaña</p>
                        <p>Código: 20202142E</p>
                        <p>Email: alejandra.zuniga.c@uni.pe</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Home;
