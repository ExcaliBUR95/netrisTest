import React from 'react';
import EventItem from '../../EventItem/ui/EventItem';
import styles from './EventList.module.css';

interface Event {
  timestamp: number;
}

interface EventListProps {
  events: Event[];
  onEventClick: (timestamp: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEventClick }) => {
  return (
    <div className={styles.eventListContainer} data-testid="event-list">
      {events.map((event, index) => (
        <button
          key={index}
          className={styles.eventItem}
          data-testid={`event-item-${event.timestamp}`}
        >
          <EventItem timestamp={event.timestamp} onClick={onEventClick} />
        </button>
      ))}
    </div>
  );
};

export default EventList;
