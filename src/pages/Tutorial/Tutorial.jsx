// Tutorial.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SidebarTutorial from '../../components/SidebarTutorial';
import VideoCard from '../../components/VideoCard';
import useTutorial from '../../hooks/useTutorial';
import CourseCard from '../../components/CourseCard';

const Tutorial = () => {

  const { filteredVideos, searchTerm, handleSearchChange } = useTutorial();

  return (
    <div className="flex bg-gray-100">
      {/* <SidebarTutorial /> */}
      <div className="flex-1 p-4 m-10">
        <h1 className="text-2xl font-bold text-lavender-700 mb-4">Lista de Cursos</h1>
        {/* <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4 border rounded border-lavender-500"
        /> */}
        <div className="space-y-4">
          {coursesData.map((course, index) => (
            
            <CourseCard key={index} course={course} />
            
          ))}
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Tutorial;

const coursesData = [
  {
    "id": "667281b82fc2bde12bc8b327", // analogo al mongo
    "title": "CURSO 1",
    "numero": 1,
    "category": "Programacion",
    "name": "Introducción y fundamentos de Python",
    "units": "2 UNIDADES",
    "duration": "24 MIN",
    "rating": 5,
    "description": "Este curso te proporcionará una introducción completa a Python, uno de los lenguajes de programación más populares y versátiles. Aprenderás los conceptos básicos, la sintaxis y las estructuras de datos fundamentales de Python, preparándote para desarrollar tus propias aplicaciones y proyectos.",
    "status": "COMPLETADO",
    "progress": "100%"
  },
  {
    "id": "66727fa22fc2bde12bc8b2fa",
    "title": "CURSO 2",
    "numero": 2,
    "category": "Programacion",
    "name": "Algoritmos y Estructuras de datos en Python",
    "units": "3 UNIDADES",
    "duration": "30 MIN",
    "rating": 4,
    "description": "En este curso, profundizarás en los algoritmos y estructuras de datos utilizando Python. Aprenderás a implementar y analizar algoritmos fundamentales y explorarás diversas estructuras de datos, como listas, pilas, colas, árboles y grafos, para mejorar la eficiencia y el rendimiento de tus programas.",
    "status": "EN PROGRESO",
    "progress": "75%"
  },
  {
    "id": 3,
    "title": "CURSO 3",
    "category": "Programacion",
    "name": "Python Avanzado",
    "units": "1 UNIDAD",
    "duration": "45 MIN",
    "rating": 4.5,
    "description": "Este curso de Python Avanzado está diseñado para programadores que ya tienen una comprensión básica de Python y desean llevar sus habilidades al siguiente nivel. Aprenderás técnicas avanzadas, como la manipulación de archivos, la programación orientada a objetos, la gestión de excepciones, y el uso de bibliotecas y frameworks populares para el desarrollo de aplicaciones complejas y eficientes.",
    "status": "NO INICIADO",
    "progress": "0%"
  }
];
