import { render, screen } from "@testing-library/react";
import Title from "../../components/Title";

describe( 'Test Title', () => {
    it('Render Title label', ()=>{
        render(<Title label="Goodmorning"/>)
        const label = screen.getByText(/goodmorning/i)
        expect(label).toBeInTheDocument();
    });
});
