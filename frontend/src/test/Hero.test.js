import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from './components/Hero';

// test suite for Hero component(can perform multiple test cases)
describe('Hero Component(Home)', () => {
  test('renders Hero component with correct title and subtitle and image', () => {

    render(<Hero/>);
    const imageElement = screen.getByAltText("hero-image"); // alt text of the image
    expect(imageElement).toBeInTheDocument(); // check if image is in the document
    expect(imageElement).toHaveAttribute('src', 'images/homeHero.png'); // check if image source is correct
  
  });
})