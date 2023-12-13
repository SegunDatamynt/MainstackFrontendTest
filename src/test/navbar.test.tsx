import { render, screen } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import Navbar from "../components/Navbar";

const mockAxios = new MockAdapter(axios);

describe("Navbar component", () => {
  beforeEach(() => {
    // Mocking the axios request
    mockAxios.onGet("https://fe-task-api.mainstack.io/user").reply(200, {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
    });
  });

  it ("should have should have Settings,purchase history, integrations, refer and earn, switch account and sign out", ()=>{
    render(<Navbar/>);
    const message = screen.queryByText(/Settings,purchase history, integrations, refer and earn, switch account and sign out/i);
    expect (message).toBeDefined()
})


  afterEach(() => {
    // Cleaning up the axios mock after each test
    mockAxios.reset();
  });
});
