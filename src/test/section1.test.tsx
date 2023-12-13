import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Section1 from "../components/Section1";

const mockAxios = new MockAdapter(axios);

describe("Section1 component", () => {
  beforeEach(() => {
    // Mocking the axios request
    mockAxios.onGet("https://fe-task-api.mainstack.io/wallet").reply(200, {
      balance: "100",
      ledger_balance: "200",
      total_payout: "300",
      total_revenue: "400",
      pending_payout: "500",
    });
  });

  it("renders the component with wallet information", async () => {
    render(<Section1 />);

    // Waiting for the asynchronous operation to complete
    await screen.findByText(/Available Balance/i);

    expect(screen.getByText(/USD 100/)).toBeInTheDocument();
    expect(screen.getByText(/USD 200/)).toBeInTheDocument();
    expect(screen.getByText(/USD 300/)).toBeInTheDocument();
    expect(screen.getByText(/USD 400/)).toBeInTheDocument();
    expect(screen.getByText(/USD 500/)).toBeInTheDocument();

   });

  afterEach(() => {
    // Cleaning up the axios mock after each test
    mockAxios.reset();
  });
});
