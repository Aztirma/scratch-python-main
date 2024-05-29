import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useState } from 'react';
import SidebarTutorial from '../../components/SidebarTutorial';
import useTutorial from '../../hooks/useTutorial';

const LibraryTutorial = () => {
  const { filteredVideos, searchTerm, handleSearchChange } = useTutorial();
  const [savedVideos, setSavedVideos] = useState([1, 3]); // IDs of saved videos

  const toggleSaveVideo = (id) => {
    setSavedVideos(prevState =>
      prevState.includes(id) ? prevState.filter(videoId => videoId !== id) : [...prevState, id]
    );
  };

  return (
    <div className="flex">
      <SidebarTutorial />
      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-bold mb-6">My Library</h1>
          <input
            type="text"
            placeholder="Search videos..."
            className="py-2 px-4 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 mb-6"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <div key={video.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center relative">
                <iframe
                  src={video.url}
                  title={video.title}
                  className="w-full h-48 mb-4 rounded"
                  allowFullScreen
                />
                <h2 className="text-xl font-bold">{video.title}</h2>
                <p className="text-gray-600">{video.author}</p>
                <p className="text-gray-600">{video.views} views</p>
                <button 
                  className="absolute top-2 right-2 text-yellow-500"
                  onClick={() => toggleSaveVideo(video.id)}
                >
                  {savedVideos.includes(video.id) ? <StarIcon /> : <StarBorderIcon />}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryTutorial;
