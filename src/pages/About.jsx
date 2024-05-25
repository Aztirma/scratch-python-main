import React from 'react';
// probando 2
const About = () => {
    return (
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
    );
}
export default About;
