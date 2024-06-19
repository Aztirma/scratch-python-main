import React from 'react';

const SidebarCourse = ({ onSelectUnit, courseID, completedUnits, units }) => {
  const isUnitAccessible = (unitId) => {
    const unitIndex = units.findIndex((unit) => unit.id === unitId);
    if (unitIndex === 0) return true; // Always accessible
    return units[unitIndex - 1].completed;
  };
  console.log('Units:', units);
  return (
    <div className="w-1/4 bg-white p-4 border-r">
      <h2 className="text-xl font-bold text-purple-principal">Curso y unidades</h2>
      <ul className="mt-4">
        {units.map((unit) => (
          <li
            key={unit.id}
            className={`mb-2 ${unit.completed ? 'text-gray-700' : 'text-gray-400'}`}
          >
            <div
              className={`flex justify-between items-center cursor-pointer ${courseID === unit.id ? 'bg-purple-300 rounded' : ''
                } ${!isUnitAccessible(unit.id) ? 'pointer-events-none opacity-50' : ''}`}
              onClick={() => isUnitAccessible(unit.id) && onSelectUnit(unit.id)}
            >
              <span className="flex items-center m-3">
                {unit.completed && <span className="mr-2">&#10003;</span>}
                {unit.title}
              </span>
              <span>{unit.duration}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCourse;
