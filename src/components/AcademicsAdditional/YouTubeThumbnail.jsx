import React from 'react';

export default function YouTubeThumbnail({ videoId }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div
      onClick={() => window.open(videoUrl, '_blank', 'noopener,noreferrer')}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        width: '100%',
        maxWidth: '640px',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <img
        src={thumbnailUrl}
        alt="YouTube video thumbnail"
        style={{ width: '100%', display: 'block' }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: '50%',
          padding: '16px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M10 16.5l6-4.5-6-4.5v9z" />
          <path d="M24 0v24H0V0h24z" fill="none" />
        </svg>
      </div>
    </div>
  );
}
