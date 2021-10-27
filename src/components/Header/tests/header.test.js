import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Header from '../index';

import logo from '../assets/images/logo.png';

const mocked = jest.fn();

describe('Header', () => {
  describe('Logo', () => {
    it('should render SpaceX logo', () => {
      render(<Header.Logo src={logo} />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });
  });

  describe('Buttons', () => {
    it('should render buttons', () => {
      render(<Header.Arrow />);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should have correct names (next)', () => {
      render(<Header.Arrow action="next" />);
      expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();
    });

    it('should have correct aria-labels (previous)', () => {
      render(<Header.Arrow action="previous" />);
      expect(screen.getByLabelText('previous')).toBeInTheDocument();
    });

    it('should call the funcion onClick', () => {
      render(<Header.Arrow onClick={mocked} direction="right" />);
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      userEvent.click(screen.getByRole('button', { name: /next/i }));
      expect(mocked).toHaveBeenCalledTimes(2);
    });
  });
});
