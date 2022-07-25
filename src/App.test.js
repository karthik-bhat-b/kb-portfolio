import { render, screen } from '@testing-library/react';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

test('renders connect Button', () => {
  render(<ChakraProvider>
    <ColorModeScript initialColorMode='dark'></ColorModeScript>
    <App />
  </ChakraProvider>);
  const linkElement = screen.getByText("Connect");
  expect(linkElement)
});
