// useTutorial.jsx
import { useContext } from 'react';
import { TutorialContext } from '../context/TutorialProvider';

const useTutorial = () => {
  const { filteredVideos, searchTerm, handleSearchChange } = useContext(TutorialContext);

  return { filteredVideos, searchTerm, handleSearchChange };
};

export default useTutorial;
