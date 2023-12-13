import {render, screen} from "@testing-library/react"
import App from "../App"


it ("should have Available Balance", ()=>{
    render(<App/>);
    const message = screen.queryByText(/Available Balance/i);
    expect (message).toBeVisible()
})
