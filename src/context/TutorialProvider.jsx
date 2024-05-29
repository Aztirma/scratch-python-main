// TutorialProvider.jsx
import React, { createContext, useState } from 'react';

const TutorialContext = createContext();

const TutorialProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    { 
      id: 1, 
      title: 'Introducción a Python', 
      url: 'https://www.youtube.com/embed/U07acSMTdr4?si=79qouvu5fyLHRliG',
      author: 'Christian Poma',
      views: 2 
    },
    { 
      id: 2, 
      title: 'Bucles en Python', 
      url: 'https://www.youtube.com/embed/5Qhjt_pirGQ?si=tTDSJmc_0re2-pcw',
      author: 'Christian Poma',
      views: 3 
    },
    { 
      id: 3, 
      title: 'Funciones en Python', 
      url: 'https://www.youtube.com/embed/cpnPvh4wUnc?si=O6XeDXpPNxQeZkle',
      author: 'Christian Poma',
      views: 4 
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

