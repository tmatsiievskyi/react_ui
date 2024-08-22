import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from '../../../lib/main';

describe('Button', () => {
  it('should render Button', () => {
    render(<Button />);
    screen.debug();

    const el = screen.getByRole('button');

    expect(el).toBeInTheDocument();
  });

  it('renders correcty with buttonType prop', () => {
    const { container: containerPrimary } = render(
      <Button buttonType='primary' />,
    );

    const { container: containerSecondary } = render(
      <Button buttonType='secondary' />,
    );

    const { container: containerOutline } = render(
      <Button buttonType='outline' />,
    );

    render(
      <Button asChild buttonType='link'>
        <a href='http://link.c'>button link</a>
      </Button>,
    );

    expect(containerPrimary).toMatchSnapshot();
    expect(containerSecondary).toMatchSnapshot();
    expect(containerOutline).toMatchSnapshot();
    expect(screen.getByRole('link', { name: 'button link' })).toHaveAttribute(
      'href',
      'http://link.c',
    );

    expect(containerPrimary.firstChild).toHaveClass(
      `select-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all 
          disabled:pointer-events-none disabled:opacity-70 disabled:shadow-none`,
    );
  });

  it('renders correctly with leftIcon prop', () => {
    const { container } = render(
      <Button label='With Left Icon' leftIcon={<span>👈</span>} />,
    );

    expect(container).toHaveTextContent('👈');
  });
});
