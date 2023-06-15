import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEvents } from '../redux/action/videoPlayerSlice';
import { RootState } from '../redux/store';
import { VideoPlayer } from './VideoPlayer';

const Index: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.video.events);
  const isLoading = useSelector((state: RootState) => state.video.isLoading);  

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd');
        const data = await response.json();
        dispatch(setEvents(data));
      } catch (error) {
        console.error('Ошибка получения списка событий:', error);
      }
    };

    fetchEvents();
  }, [dispatch]);

  if (isLoading) {
    return <div data-testid="loading">Loading...</div>;
  }

  return (
    <div data-testid="index">
      <VideoPlayer events={events} data-testid="video-player" />
    </div>
  );
};

export default Index;
