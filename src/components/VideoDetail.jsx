// VideoDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useTutorial from '../../hooks/useTutorial';

const VideoDetail = () => {
  const { videoId } = useParams();
  const { filteredVideos } = useTutorial();
  const video = filteredVideos.find(v => v.id === parseInt(videoId, 10));

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-lavender-700 mb-4">{video.title}</h1>
      <iframe
        className="w-full h-64 mt-2"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="mt-4">
        <p className="text-lg text-gray-700">Autor: {video.author}</p>
        <p className="text-lg text-gray-700">Reproducciones: {video.views}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
