// Tutorial.jsx
import React from 'react';
import SidebarTutorial from '../../components/SidebarTutorial';
import VideoCard from '../../components/VideoCard';
import useTutorial from '../../hooks/useTutorial';

const Tutorial = () => {
  const { filteredVideos, searchTerm, handleSearchChange } = useTutorial();

  return (
    <div className="flex">
      <SidebarTutorial />
      <div className="flex-1 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold text-lavender-700 mb-4">Lista de Tutoriales</h1>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 mb-4 border rounded border-lavender-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;

