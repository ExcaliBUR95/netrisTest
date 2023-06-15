import React from 'react';
import styles from './EventItem.module.css'

interface EventItemProps {
  timestamp: number;
  onClick: (timestamp: number) => void; 
}

const EventItem: React.FC<EventItemProps> = ({ timestamp, onClick }) => {
  const formattedTime = new Date(timestamp).toISOString().substr(14, 9);
  
  return <div className={styles.eventItem}  onClick={() => onClick(timestamp)}>{formattedTime}</div>; 
};

export default EventItem;
