import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils/RenderWithRouter';

describe('Testa as funcionalidades da aplicação', () => {
  afterEach(() => jest.clearAllMocks());

  it('Insere um valor na caixa de busca', () => {
    renderWithRouter(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Agumon');
    expect(searchInput).toHaveValue('Agumon');
  });
  