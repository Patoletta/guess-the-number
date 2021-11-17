import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../views/App";

describe('Test App.js', () => {
  it('Render app', () => {
    render(<App />)
    const label = screen.getByText(/guess/i)
    expect(label).toBeInTheDocument();
  });
});