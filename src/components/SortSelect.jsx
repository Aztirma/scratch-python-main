import React from 'react';

const SortSelect = ({ value, onChange }) => {
    return (
        <select className="border border-gray-300 rounded p-2 text-gray-600" value={value} onChange={onChange}>
            <option value="Most played">Ordenar por: Más jugados</option>
            <option value="Least played">Ordenar por: Menos jugados</option>
            <option value="Highest Rated">Ordenar por: Más populares</option>
        </select>
    );
};

export default SortSelect;
