import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import SidebarCourse from './SidebarCourse';
import QuizzGame2 from '../pages/Quizz/QuizzGame2';
import CourseContext from '../hooks/useCourse';
import useCourse from '../hooks/useCourse';
 
const CourseDetail = () => {
    const { id } = useParams();
    const { courses, units, updateUnit } = useCourse();

    const [selectedUnitId, setSelectedUnitId] = useState(null);
    const [completedUnits, setCompletedUnits] = useState([]);
    const [course, setCourse] = useState(null);
    const [unit, setUnit] = useState(null);
    const [unitsCourse, setUnitsCourse] = useState([]);

    useEffect(() => {
        if (courses.length > 0) {
            const selectedCourse = courses.find((c) => c._id === id);
            if (selectedCourse) {
                setCourse(selectedCourse);
                const courseUnits = units.filter((u) => u.courseID === selectedCourse._id);
                if (courseUnits.length > 0) {
                    setSelectedUnitId(courseUnits[0]._id);
                    setUnit(courseUnits[0]);
                    setUnitsCourse(courseUnits);
                }
                units.forEach((u) => {
                    if (u.completed) {
                        setCompletedUnits((prev) => [...prev, u._id]);
                    }
                }
                );
            }
        }
    }, [courses, id, units]);

    useEffect(() => {
        if (selectedUnitId) {
            const foundUnit = units.find((unit) => unit._id === selectedUnitId);
            setUnit(foundUnit);
        }
    }, [selectedUnitId, units]);

    const handleSelectUnit = (unitId) => {
        const unitIndex = units.findIndex((unit) => unit._id === unitId);
        if (unitIndex === 0 || units[unitIndex - 1].completed) {
            setSelectedUnitId(unitId);
        }
    };

    const handleCompleteUnit = async () => {
        if (!unit) return;

        const updatedUnitData = {
            courseID: unit.courseID,
            unitNumber: unit.unitNumber,
            unitName: unit.unitName,
            description: unit.description,
            video: unit.video,
            quizzID: unit.quizzID,
            completed: true,
        };

        try {
            await updateUnit(selectedUnitId, updatedUnitData);
            const updatedUnits = unitsCourse.map((u) =>
                u._id === selectedUnitId ? { ...u, completed: true } : u
            );
            setUnitsCourse(updatedUnits);
            setCompletedUnits((prev) => [...new Set([...prev, selectedUnitId])]);
            setUnit((prevUnit) => ({ ...prevUnit, completed: true }));
        } catch (error) {
            console.error('Error updating unit:', error);
        }
    };

    const isUnitCompleted = completedUnits.includes(selectedUnitId);
    console.log('Unit:', selectedUnitId);
    console.log('Unit:', completedUnits);
    if (!course || !unit) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex h-screen">
            <SidebarCourse
                onSelectUnit={handleSelectUnit}
                courseID={selectedUnitId}
                completedUnits={completedUnits}
                units={unitsCourse}
            />
            <div className="w-3/4 p-4 relative">
                <button
                    className={`absolute top-4 right-4 px-4 py-2 ${isUnitCompleted ? 'bg-green-500' : 'bg-blue-500'
                        } text-white rounded`}
                    onClick={handleCompleteUnit}
                >
                    {isUnitCompleted ? 'Unidad Completada' : 'Marcar como completada'}
                </button>
                <h2 className="text-xl font-bold">{course.courseName}</h2>
                <div className="mt-4">
                    <h3 className="text-lg font-bold">{unit.unitName}</h3>
                    {unit.video && (
                        <iframe
                            width="100%"
                            height="400"
                            src={unit.video}
                            title={unit.unitName}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <div className="mt-4">
                    <p>{unit.description}</p>
                </div>
                <p>{unit.quizzID}</p>
                {unit.quizzID ? <QuizzGame2 id={unit.quizzID} /> : null}
            </div>
        </div>
    );
};

export default CourseDetail;
