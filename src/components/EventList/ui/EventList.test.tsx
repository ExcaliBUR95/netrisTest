import React from 'react';
import { render, screen } from '@testing-library/react';
import EventList from './EventList';

describe('EventList', () => {
  const events = [
    { timestamp: 0 },
    { timestamp: 100 },
    { timestamp: 200 },
  ];


  
  it('корректно отображает количество событий', () => {
    render(<EventList events={events} onEventClick={jest.fn()} />);
    const eventItems = screen.getAllByTestId(/^event-item-/);
    expect(eventItems.length).toBe(events.length);
  });
  
});
