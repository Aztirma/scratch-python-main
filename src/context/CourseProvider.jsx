import React, { createContext, useState, useEffect } from 'react';
import clienteAxios from '../config/clientAxios';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [units, setUnits] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await clienteAxios.get('/course');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        const fetchUnits = async () => {
            try {
                const response = await clienteAxios.get('/unit');
                setUnits(response.data);
            } catch (error) {
                console.error('Error fetching units:', error);
            }
        };

        fetchCourses();
        fetchUnits();
    }, []);

    const fetchUnits = async () => {
        try {
            const response = await clienteAxios.get('/unit');
            setUnits(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const fetchUnitsById = async (courseId) => {
        try {
            const response = await clienteAxios.get(`/unit?courseID=${courseId}`);
            setUnits(response.data);
        } catch (error) {
            console.error('Error fetching units:', error);
        }
    };

    const addCourse = async (course) => {
        try {
            const response = await clienteAxios.post('/course', course);
            setCourses([...courses, response.data]);
            return response;
        } catch (error) {
            console.error('Error adding course:', error);
        }
    };

    const updateCourse = async (id, updatedCourse) => {
        try {
            const response = await clienteAxios.put(`/course/${id}`, updatedCourse);
            setCourses(courses.map(course => course._id === id ? response.data : course));
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            await clienteAxios.delete(`/course/${id}`);
            setCourses(courses.filter(course => course._id !== id));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    const addUnit = async (unit) => {
        try {
            const response = await clienteAxios.post('/unit', unit);
            setUnits([...units, response.data]);
        } catch (error) {
            console.error('Error adding unit:', error);
        }
    };

    const updateUnit = async (id, updatedUnit) => {
        try {
            console.log('Updated unit:', updatedUnit);
            const response = await clienteAxios.put(`/unit/${id}`, updatedUnit);
            setUnits(units.map(unit => unit._id === id ? response.data : unit));
        } catch (error) {
            console.error('Error updating unit:', error);
        }
    };

    const deleteUnit = async (id) => {
        try {
            await clienteAxios.delete(`/unit/${id}`);
            setUnits(units.filter(unit => unit._id !== id));
        } catch (error) {
            console.error('Error deleting unit:', error);
        }
    };

    return (
        <CourseContext.Provider
            value={{
                courses,
                units,
                setCourses,
                setUnits,
                addCourse,
                updateCourse,
                deleteCourse,
                fetchUnits,
                fetchUnitsById,
                addUnit,
                updateUnit,
                deleteUnit,
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export { 
    CourseProvider
};

export default CourseContext;
