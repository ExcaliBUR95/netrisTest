import React, { useState, useRef } from 'react';
import { EventList } from '../../EventList';
import styles from './VideoPlayer.module.css';

interface Event {
  timestamp: number;
  endTime: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface VideoPlayerProps {
  events: Event[];
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ events }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [rectangles, setRectangles] = useState<Event[]>([]);

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.paused) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleEventClick = (timestamp: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timestamp / 1000;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime * 1000;

      const visibleRectangles = events.filter(
        (event) => currentTime >= event.timestamp && currentTime <= event.endTime
      );

      setRectangles(visibleRectangles);
    }
  };
 
  console.log(rectangles)
  return (
    <div className={styles.videoPlayerContainer}>
      <video
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        onClick={handleVideoClick}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        className={styles.videoPlayer} 
        data-testid="video-player" 
      />
      {rectangles.map((event, index) => (
        <div
          key={index}
          className={styles.rectangle}  
          style={{
            left: event.x,
            top: event.y,
            width: event.width,
            height: event.height,
          }}
          data-testid={`event-rectangle-${index}`}  
        />
      ))}
      <EventList events={events} onEventClick={handleEventClick} />
    </div>
  );
};

export default VideoPlayer;
