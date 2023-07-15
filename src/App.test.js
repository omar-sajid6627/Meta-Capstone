import React from 'react';
import { render, screen } from '@testing-library/react';
import Reservations from './pages/reservations';

describe('Reservations component', () => {
  test('renders reservation form', () => {
    render(<Reservations />);
    
    // Check if the form elements are rendered
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('People')).toBeInTheDocument();
    expect(screen.getByLabelText('Date & Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Default select example')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('submits reservation form', () => {
   

    render(<Reservations />);
    
   
  });
});
