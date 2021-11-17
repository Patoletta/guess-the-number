import { render, screen, fireEvent } from "@testing-library/react";
import DashboardPage from "../../../views/Dashboard/DashboardPage"

describe('Test DashboardPage.js', () => {
    it('Render dashboard', () => {
        render(<DashboardPage />)
        const label = screen.getByText(/number/i)
        expect(label).toBeInTheDocument();
    });
    it('Should handle change', () => {
        render(<DashboardPage />)
        fireEvent.change(screen.getByLabelText(/number:/i), {
            target: {value: '11'}
        })
        const label = screen.getByLabelText(/number:/i)
        expect(label.value).toEqual("11");
    });
    it('Should handle click Victory', () => {
        render(<DashboardPage testNumber= "11"/>)
        fireEvent.change(screen.getByLabelText(/number:/i), {
            target: {value: '11'}
        })
        const button = screen.getByText(/is/i)
        fireEvent.click(button)
        const label = screen.getByText(/evviva/i)
        expect(label).toBeInTheDocument();
    });
    it('Should handle click Failed', () => {
        render(<DashboardPage testNumber= "11"/>)
        fireEvent.change(screen.getByLabelText(/number:/i), {
            target: {value: '1'}
        })
        const button = screen.getByText(/is/i)
        fireEvent.click(button)
        expect(screen.getByText(/ritenta!/i)).toBeInTheDocument();
    });
});