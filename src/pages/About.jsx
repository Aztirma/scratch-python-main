import React from 'react';
import logo from '../assets/logo.png';

// probando 2
const About = () => {

    const teamMembers = [
        {
            name: 'Alejandra Zuñiga Chicaña',
            role: ' ',
            description:
                'alejandra.zuniga.c@uni.pe',
            codigo: '20202142E',
            image: 'https://avatars.akamai.steamstatic.com/874e8bffdad940ec5f4ba3b40c655add5279e237_full.jpg'
        },
        {
            name: 'Christian Poma',
            role: ' ',
            description:
                'christian.poma.n@uni.pe',
            codigo: '20191116C',
            image: 'https://avatars.akamai.steamstatic.com/3bc30682254b739f3ba7026e9da19d07b77ea151_full.jpg'
        }
    ];


    // return (
    //     <div className="m-8">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //         <div className="p-4 shadow-lg rounded-lg bg-white m-4">
    //             <h2 className="text-xl font-semibold">Miembro 1</h2>
    //             <p>Nombre: Christian Poma Navarro</p>
    //             <p>Código: 20191116C</p>
    //             <p>Email: christian.poma.n@uni.pe</p>
    //         </div>
    //         <div className="p-4 shadow-lg rounded-lg bg-white m-4">
    //             <h2 className="text-xl font-semibold">Miembro 2</h2>
    //             <p>Nombre: Alejandra Zuñiga Chicaña</p>
    //             <p>Código: 20202142E</p>
    //             <p>Email: alejandra.zuniga.c@uni.pe</p>
    //         </div>
    //     </div>
        
    // </div>
    // );

    return (
        <div className="bg-white text-center py-12">
            <div className="max-w-4xl mx-auto">
                <img src={logo} alt="Team Cherry Logo" className="mx-auto mb-6 h-32" /> {/* Actualiza con la ruta correcta */}
                <h1 className="text-4xl font-bold text-purple-principal">IHC</h1>
                {/* <p className="text-gray-600 font-semibold mb-6">SWEET ROUND GAMES</p> */}
                <p className="text-gray-800 mb-8 mt-8">
                El proyecto es un asistente de estudios para personas con problemas de <br/>
                visión, enfocado en la programación visual en Python. Utiliza interfaces adaptativas <br/>
                con audio, elementos táctiles y gráficos de alto contraste para facilitar el aprendizaje.
                </p>
                <h2 className="text-2xl font-bold mb-8">Nosotros:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="mx-auto mb-4 rounded-full w-32 h-32 object-cover border-4 border-purple-principal"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-purple-principal mb-4">{member.role}</p>
                            <p className="text-gray-600 px-4">{member.description}</p>
                            <p className="text-gray-600 px-4">{member.codigo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}
export default About;
