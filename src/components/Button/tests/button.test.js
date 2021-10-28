import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Button from '../index';

const mocked = jest.fn();

describe('Button', () => {
  it('should render correct aria label', () => {
    render(
      <Button name="test" aria="OK">
        SUBMIT
      </Button>
    );
    expect(screen.getByLabelText('OK')).toBeInTheDocument();
  });

  it('should call the function onClick', () => {
    render(<Button onClick={mocked} name="test" aria="test" />);
    userEvent.click(screen.getByRole('button', { name: /test/i }));
    userEvent.click(screen.getByRole('button', { name: /test/i }));
    expect(mocked).toHaveBeenCalledTimes(2);
  });
});
