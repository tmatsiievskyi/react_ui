import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../../../lib/main';

describe('Input', () => {
  it('should render Input', () => {
    render(<Input />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    screen.debug();
  });

  it('should render Input with lable and value', () => {
    render(
      <Input
        id='test'
        label='Label'
        onChange={() => {}}
        placeholder='Default'
        value='Value'
      />,
    );

    expect(screen.getByLabelText(/label/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Default')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Value')).toBeInTheDocument();
  });

  it('should properly handle entering values', () => {
    const { getByTestId } = render(<Input data-testid='test-id' />);

    const input = getByTestId('test-id');

    expect(input).not.toHaveFocus();
    input.focus();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'Some Value' },
    });
    expect(input).toHaveFocus();
    expect(screen.getByDisplayValue('Some Value')).toBeInTheDocument();
  });
});
