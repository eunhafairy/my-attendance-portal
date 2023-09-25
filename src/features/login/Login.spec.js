import { Login } from "./Login";
import {cleanup, fireEvent, render, screen} from '@testing-library/react';


afterEach(cleanup)
describe("Login", () =>{

    const setup = () => {
        render(
            <Login />
        )
    }

    describe("Layout", ()=>{
        it("shows hello world", ()=>{
            setup()
            const h1 = screen.getByText("Hello World")
            expect(h1).toBeInTheDocument()
        })
    })
})