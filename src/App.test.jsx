import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders h1 title ", () => {
    render(<App />);
    expect(screen.getByText("Expense Tracker")).toBeVisible();
  });

  it("renders h3 headings ", () => {
    render(<App />);
    expect(screen.getByText("Balance")).toBeInTheDocument();
    expect(screen.getByText("Income")).toBeInTheDocument();
    expect(screen.getByText("Expenses")).toBeInTheDocument();
  });

  it("should handle input event", async () => {
    render(<App />);
    const incomeInput = screen.getByPlaceholderText(/enter income amount/i);
    await userEvent.type(incomeInput, '100');
    expect(incomeInput.value).toBe('100');
  });
  
  it("renders add income", async () => {
    render(<App />);
    const addIncome = screen.queryByRole('button', { name: /add income/i });
    await userEvent.click(addIncome);
    const spanElement = screen.queryByRole('span');
    expect(spanElement);
  });

  it("should handle input event", async () => {
    render(<App />);
    const expenseInput = screen.getByPlaceholderText(/enter expense amount/i);
    await userEvent.type(expenseInput, '30');
    expect(expenseInput.value).toBe('30');
  });

  it("renders h2 heading ", () => {
    render(<App />);
    expect(screen.getByText("Expenses Table")).toBeVisible();
  });
  
  it("renders add expense", async () => {
    render(<App />);
    const addBtn = screen.queryByRole('button', { name: /add expense/i });
    await userEvent.click(addBtn);
    const tableElement = screen.queryByRole('table');
    expect(tableElement);
  });
});
