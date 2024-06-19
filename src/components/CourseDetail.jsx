import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarCourse from './SidebarCourse';
import QuizzGame from '../pages/Quizz/QuizzGame';


const CourseDetail = (  ) => {
    const { id } = useParams();
    const [selectedUnitId, setSelectedUnitId] = useState(1); // Por defecto, seleccionar la primera unidad
    const [completedUnits, setCompletedUnits] = useState([1]); // Estado para manejar las unidades completadas
    let indice = 0;
    console.log('Params:', id);
    id === "667281b82fc2bde12bc8b327" ? indice = 0 : indice = 1;
    const course = coursesData[indice]; // Asumiendo que solo hay un curso por ahora
    const unit = course.units.find((unit) => unit.id === selectedUnitId);

    useEffect(() => {
        
    }, [id]);

    const handleSelectUnit = (unitId) => {
        const unitIndex = course.units.findIndex((unit) => unit.id === unitId);
        if (unitIndex === 0 || course.units[unitIndex - 1].completed) {
            setSelectedUnitId(unitId);
        }
    };

    const handleCompleteUnit = () => {
        const updatedUnits = course.units.map((u) =>
            u.id === selectedUnitId ? { ...u, completed: true } : u
        );
        course.units = updatedUnits;
        setCompletedUnits((prev) => [...new Set([...prev, selectedUnitId])]);
    };

    const isUnitCompleted = completedUnits.includes(selectedUnitId);

    return (
        <div className="flex h-screen">
            <SidebarCourse
                onSelectUnit={handleSelectUnit}
                courseID={selectedUnitId}
                completedUnits={completedUnits}
                units={course.units}
            />
            <div className="w-3/4 p-4 relative">
                <button
                    className={`absolute top-4 right-4 px-4 py-2 ${isUnitCompleted ? 'bg-green-500' : 'bg-blue-500'
                        } text-white rounded`}
                    onClick={handleCompleteUnit}
                >
                    {isUnitCompleted ? 'Unidad Completada' : 'Marcar como completada'}
                </button>
                <h2 className="text-xl font-bold">{course.name}</h2>
                <div className="mt-4">
                    <h3 className="text-lg font-bold">{unit.title}</h3>
                    {unit.hasVideo && (
                        <iframe
                            width="100%"
                            height="400"
                            src={unit.videoUrl}
                            title={unit.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className="mt-4">
                    <p>{unit.description}</p>
                </div>
                {unit.hasQuizz ? <QuizzGame quizz={unit} /> : null}
            </div>
        </div>
    );
};

export default CourseDetail;


const coursesData = [
    {
        id: 'dsabjkabdsjabskjd',
        title: 'CURSO 1',
        category: 'Fundamentos',
        name: 'Curso 1: Python básico',
        units: [
            {
                id: 1,
                title: 'Introduccion',
                hasVideo: false,
                completed: true,
                hasQuizz: false,
                videoUrl: '',
                description: `Python se ha consolidado como uno de los lenguajes de programación más relevantes en la industria tecnológica actual. Su versatilidad, legibilidad y amplia gama de aplicaciones lo convierten en una herramienta indispensable tanto para desarrolladores novatos como para profesionales experimentados.
                Este curso está diseñado para proporcionar una comprensión sólida y práctica de los conceptos fundamentales de Python. Comenzaremos con los elementos básicos, tales como la sintaxis del lenguaje, tipos de datos y estructuras de control. A medida que avancemos, exploraremos temas más complejos, incluyendo la manipulación de datos, funciones y la introducción a la programación orientada a objetos.
                `,
            },
            {
                id: 2,
                title: 'Unidad 1: Introdución a Python',
                hasVideo: true,
                completed: false,
                hasQuizz: false,
                videoUrl: 'https://www.youtube.com/embed/U07acSMTdr4?si=79qouvu5fyLHRliG',
                description: 'En esta unidad aprenderás sobre los fundamentos básicos de Python y el uso de la herramiento scratch-python.',
            },
            {
                id: 3,
                title: 'Unidad 2: Modelo de resolución de problemas',
                hasVideo: true,
                completed: false,
                hasQuizz: false,
                videoUrl: 'https://www.youtube.com/embed/5Qhjt_pirGQ?si=tTDSJmc_0re2-pcw',
                description: 'Te mostraremos un ejemplo utilizando el IDE para que puedas implementarlo.',
            },
            {
                id: 4,
                title: 'Ponte a prueba',
                hasVideo: false,
                completed: false,
                hasQuizz: true,
                videoUrl: '',
                description: 'Es momento de una autoevaluación.',
            },
        ],
        description: 'Ya estás cerca a culminar tus estudios y seguro tienes preguntas sobre ¿Cómo cumplir con tu compromiso de servicio al Perú? En este curso te hablaremos sobre la importancia del Compromiso de Servicio al Perú y qué pasos debes seguir para cumplirlo.',
        status: 'COMPLETADO',
        progress: '100%',
    },
    {
        id: 'dsabjkabdsjabskjd',
        title: 'CURSO 2',
        category: 'Algoritmos y Estructuras',
        name: 'Curso 2: Algoritmos y Estructuras de datos en Python',
        units: [
            {
                id: 1,
                title: 'Introduccion',
                hasVideo: false,
                completed: true,
                hasQuizz: false,
                videoUrl: '',
                description: `En el ámbito de la informática y el desarrollo de software, los algoritmos y las estructuras de datos son componentes fundamentales que determinan la eficiencia y el rendimiento de las aplicaciones. Este curso está diseñado para proporcionar una comprensión profunda y rigurosa de estos conceptos esenciales utilizando Python como lenguaje de programación.

A lo largo de este curso, exploraremos una variedad de algoritmos clásicos y modernas estructuras de datos, desde los más básicos hasta los más avanzados. Comenzaremos con una introducción a los principios fundamentales de los algoritmos, incluyendo la complejidad temporal y espacial, y cómo analizar la eficiencia de diferentes enfoques. Posteriormente, nos adentraremos en las estructuras de datos más utilizadas, como listas, pilas, colas, árboles y grafos, así como en algoritmos de búsqueda y ordenación.`,
            },
            {
                id: 2,
                title: 'Unidad 1: Estructuras de datos',
                hasVideo: true,
                completed: false,
                hasQuizz: false,
                videoUrl: 'https://www.youtube.com/embed/U07acSMTdr4?si=79qouvu5fyLHRliG',
                description: 'En esta unidad aprenderás sobre las diferentes estructuras de datos que posee Python y en que tipo de situaciones utilizarlas.',
            },
            {
                id: 3,
                title: 'Unidad 2: Complejidad algorítmica',
                hasVideo: true,
                completed: false,
                hasQuizz: false,
                videoUrl: 'https://www.youtube.com/embed/cpnPvh4wUnc?si=O6XeDXpPNxQeZkle',
                description: 'En esta unidad te enseñaremos sobre la complejidad algorítmica y el estudio de algoritmos utilizando un entorno como python.',
            },
            {
                id: 4,
                title: 'Ponte a prueba',
                hasVideo: false,
                completed: false,
                hasQuizz: true,
                videoUrl: '',
                description: 'Es momento de una autoevaluación.',
            },
        ],
        description: 'Ya estás cerca a culminar tus estudios y seguro tienes preguntas sobre ¿Cómo cumplir con tu compromiso de servicio al Perú? En este curso te hablaremos sobre la importancia del Compromiso de Servicio al Perú y qué pasos debes seguir para cumplirlo.',
        status: 'COMPLETADO',
        progress: '100%',
    }
    
];