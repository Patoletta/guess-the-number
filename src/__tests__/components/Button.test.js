import { render, screen } from "@testing-library/react";
import Button from "../../components/Button";

describe( 'Test Button', () => {
    it('Render button label', ()=>{
        render(<Button label="Submit"/>)
        const label = screen.getByText(/submit/i)
        expect(label).toBeInTheDocument();
    });
});
