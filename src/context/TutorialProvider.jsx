// TutorialProvider.jsx
import React, { createContext, useState } from 'react';

const TutorialContext = createContext();

const TutorialProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    { 
      id: 1, 
      title: 'Introducción a Python', 
      url: 'https://www.youtube.com/embed/4PS8QcRuRHM',
      author: 'John Doe',
      views: 12345 
    },
    { 
      id: 2, 
      title: 'Bucles en Python', 
      url: 'https://www.youtube.com/embed/your_video_id2',
      author: 'Jane Smith',
      views: 67890 
    },
    { 
      id: 3, 
      title: 'Funciones en Python', 
      url: 'https://www.youtube.com/embed/your_video_id3',
      author: 'Alice Johnson',
      views: 23456 
    },
    // Más videos aquí...
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TutorialContext.Provider value={{ filteredVideos, searchTerm, handleSearchChange }}>
      {children}
    </TutorialContext.Provider>
  );
};

export { TutorialContext, TutorialProvider };

