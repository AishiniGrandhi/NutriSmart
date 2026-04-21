import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Dashboard from '../components/Dashboard';

describe('Dashboard Component', () => {
  it('renders the section title', () => {
    render(<Dashboard />);
    expect(screen.getByText('Your Progress')).toBeInTheDocument();
  });

  it('renders all four progress cards', () => {
    render(<Dashboard />);
    expect(screen.getByText('Calories')).toBeInTheDocument();
    expect(screen.getByText('Protein')).toBeInTheDocument();
    expect(screen.getByText('Carbs')).toBeInTheDocument();
    expect(screen.getByText('Fats')).toBeInTheDocument();
  });

  it('displays correct stat values', () => {
    render(<Dashboard />);
    expect(screen.getByText('1,840')).toBeInTheDocument();
    expect(screen.getByText('92')).toBeInTheDocument();
  });
});
