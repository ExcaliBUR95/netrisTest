import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EventItem from './EventItem';

describe('EventItem', () => {
  const timestamp = 1628937000000; 

  it('вызывает функцию onClick при клике', () => {
    const onClick = jest.fn();
    render(<EventItem timestamp={timestamp} onClick={onClick} />);

    const eventItem = screen.getByText(
      new Date(timestamp).toISOString().substr(14, 9)
    );

    fireEvent.click(eventItem);

    expect(onClick).toHaveBeenCalledWith(timestamp);
  });
});
