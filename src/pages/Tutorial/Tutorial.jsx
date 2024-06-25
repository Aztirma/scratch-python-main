import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../../components/CourseCard';
import useCourse from '../../hooks/useCourse';

const Tutorial = () => {
  const { courses } = useCourse();
  const navigate = useNavigate();

  const handleNavigateToCreateCourse = () => {
    navigate('/create-course');
  };

  return (
    <div className="flex bg-gray-100">
      <div className="flex-1 p-4 m-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-lavender-700">Lista de Cursos</h1>
          <button
            onClick={handleNavigateToCreateCourse}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700"
          >
            Agregar Curso
          </button>
        </div>

        <div className="space-y-4">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
