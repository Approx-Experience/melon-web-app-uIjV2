import {render, screen} from '@testing-library/react';
import NavBar from './NavBar';
import { expect, it } from 'vitest';

describe('NavBar Component', () => {
    it('renders the melon logo', () => {
        render(<NavBar />);
        expect(screen.getByAltText('Melon Logo')).toBeInTheDocument();
    });

    it('renders the search input', () => {
        render(<NavBar />);
        expect(screen.getByPlaceholderText('Find your next fit')).toBeInTheDocument();
    });

    it('renders the account, favorites, and cart icons', () => {
        render(<NavBar />);
    expect(screen.getByAltText('Account icon')).toBeInTheDocument();
    expect(screen.getByAltText('Favorites icon')).toBeInTheDocument();
    expect(screen.getByAltText('Cart icon')).toBeInTheDocument();   
    });

    it('renders the navigation links', () => {
        render(<NavBar />);
        expect(screen.getByText('new arrivals')).toBeInTheDocument();
        expect(screen.getByText('men')).toBeInTheDocument();
        expect(screen.getByText('women')).toBeInTheDocument();
        expect(screen.getByText('accessories')).toBeInTheDocument();
        expect(screen.getByText('shoes')).toBeInTheDocument();
        expect(screen.getByText('sale')).toBeInTheDocument();
    });
});
