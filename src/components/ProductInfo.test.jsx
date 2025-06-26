import {render, screen} from '@testing-library/react';
import ProductInfo from './ProductInfo';

describe('ProductInfo Component', () => {
    it('renders the product', () => {
        render(<ProductInfo />);

         const title = screen.getByRole('heading', { name: /product title/i }); // Adjust the text as needed
        expect(title).toBeInTheDocument();
    })

    it('renders the product price', () => {
        render(<ProductInfo />);
        const price = screen.getByText(/\$0\.00/i); // Adjust the price as needed
        expect(price).toBeInTheDocument();
    });

});