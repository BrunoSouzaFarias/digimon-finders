import React from "react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import App from '../App';
import renderWithRouter from './utils/RenderWithRouter';

describe('Testa as rotas da aplicação', () => {
    it('Aplicação é renderizada com sucesso', () => {
      renderWithRouter(<App />);
      const headingEl = screen.getByRole('heading', {
        name: /Search Digimon/i,
      });
  
      expect(headingEl).toBeInTheDocument();
  
      const aboutLink = screen.getByRole('link', { name: 'About' });
      const searchLink = screen.getByRole('link', { name: 'Search Digimon' });
      expect(aboutLink).toBeInTheDocument();
      expect(searchLink).toBeInTheDocument();
    });