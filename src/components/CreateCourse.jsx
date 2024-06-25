import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCourse from '../hooks/useCourse';

const CreateCourse = () => {
    const { addCourse, addUnit } = useCourse();
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [units, setUnits] = useState([]);
    const navigate = useNavigate();

    const handleAddUnit = () => {
        setUnits([...units, { unitName: '', unitDescription: '', unitNumber: units.length + 1 }]);
    };

    const handleUnitChange = (index, field, value) => {
        const newUnits = [...units];
        newUnits[index][field] = value;
        setUnits(newUnits);
    };

    const handleCreateCourse = async () => {
        if (courseName && courseDescription) {
            const newCourse = {
                courseName,
                courseDescription,
                numberUnits: units.length,
                rating: 0,
                duration: 0,
                status: 'NO INICIADO',
                progress: 0,
                points: 0,
                creator: 'Unknown',
            };
            const response = await addCourse(newCourse);
            const courseID = response.data._id;

            units.forEach(async (unit, index) => {
                const newUnit = {
                    courseID: courseID,
                    unitNumber: index,
                    unitName: unit.unitName,
                    description: unit.unitDescription,
                    video: '',
                    quizzID: '',
                    completed: false,
                };
                console.log('newUnit:', newUnit);
                await addUnit(newUnit);
            });


            // navigate('/home'); // Redirigir a la lista de cursos después de crear el curso
        }
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-purple-600 mb-4">Crear Nuevo Curso</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Nombre del Curso"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        className="border p-2 rounded mb-2 w-full"
                    />
                    <textarea
                        placeholder="Descripción del Curso"
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                        className="border p-2 rounded mb-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-purple-600 mb-2">Unidades</h2>
                    {units.map((unit, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg">
                            <input
                                type="text"
                                placeholder="Nombre de la Unidad"
                                value={unit.unitName}
                                onChange={(e) => handleUnitChange(index, 'unitName', e.target.value)}
                                className="border p-2 rounded mb-2 w-full"
                            />
                            <textarea
                                placeholder="Descripción de la Unidad"
                                value={unit.unitDescription}
                                onChange={(e) => handleUnitChange(index, 'unitDescription', e.target.value)}
                                className="border p-2 rounded mb-2 w-full"
                            />
                        </div>
                    ))}
                    <button
                        onClick={handleAddUnit}
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700"
                    >
                        Agregar Unidad
                    </button>
                </div>
                <button
                    onClick={handleCreateCourse}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700"
                >
                    Crear Curso
                </button>
            </div>
        </div>
    );
};

export default CreateCourse;
