// VideoCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold text-lavender-700">{video.title}</h2>
      <iframe
        className="w-full h-64 mt-2"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="mt-2">
        <p className="text-sm text-gray-700">Autor: {video.author}</p>
        <p className="text-sm text-gray-700">Reproducciones: {video.views}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
