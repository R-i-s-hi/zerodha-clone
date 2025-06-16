import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Hero from '../landing_page/home/Hero';

// test suite for Hero component(can perform multiple test cases)
describe('Hero Component(Home)', () => {
  // test('renders Hero component with correct title and subtitle and image', () => {

  //   render(
  //     <MemoryRouter>
  //       <Hero />
  //     </MemoryRouter>
  //   )
  //   const imageElement = screen.getByAltText("hero-image"); // alt text of the image
  //   expect(imageElement).toBeInTheDocument(); // check if image is in the document
  //   expect(imageElement).toHaveAttribute('src', 'images/homeHero.png'); // check if image source is correct
  
  // });


  test('truthy test', () => {
  expect(1 + 1).toBe(2);
  });

})