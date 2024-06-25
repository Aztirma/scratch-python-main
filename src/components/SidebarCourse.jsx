import React from 'react';

const SidebarCourse = ({ onSelectUnit, courseID, completedUnits, units }) => {

  const isUnitAccessible = (unitNumber) => {
    const unitIndex = units.findIndex((unit) => unit.unitNumber === unitNumber);
    console.log('Unit index:', unitIndex);
    if (unitIndex === 0) return true; // Always accessible
    return unitIndex !== -1 && units[unitIndex - 1].completed; // Check if the previous unit is completed
  };

  console.log('Units:', units);

  return (
    <div className="w-1/4 bg-white p-4 border-r">
      <h2 className="text-xl font-bold text-purple-principal">Curso y unidades</h2>
      <ul className="mt-4">
        {units.map((unit) => (
          <li
            key={unit._id} // Use _id for unique key
            className={`mb-2 ${unit.completed ? 'text-gray-700' : 'text-gray-400'}`}
          >
            <div
              className={`flex justify-between items-center cursor-pointer ${courseID === unit._id ? 'bg-purple-300 rounded' : ''
                } ${!isUnitAccessible(unit.unitNumber) ? 'pointer-events-none opacity-50' : ''}`}
              onClick={() => isUnitAccessible(unit.unitNumber) && onSelectUnit(unit._id)}
            >
              <span className="flex items-center m-3">
                {unit.completed && <span className="mr-2">&#10003;</span>}
                {unit.unitName}
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
