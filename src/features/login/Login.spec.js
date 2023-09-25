import { APP_TITLE } from "../../config/constants";
import { Login } from "./Login";
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { LOGIN_TEST_ID } from "../../config/test.constants";

const { textfieldUsername, textfieldConfirmPassword, textfieldPassword } = LOGIN_TEST_ID

afterEach(cleanup)
describe("Login", () =>{

    const setup = () => {
        render(
            <Login />
        )
    }

    describe("Layout", ()=>{

        it("shows app title", ()=>{
            setup()
            const h1 = screen.getByText(APP_TITLE)
            expect(h1).toBeInTheDocument()
        })

        it("shows username textbox", ()=>{
            setup()
            const username = screen.getByTestId(textfieldUsername)
            expect(username).toBeInTheDocument()
        })

        it("shows password textbox", ()=>{
            setup()
            const password = screen.getByTestId(textfieldPassword)
            expect(password).toBeInTheDocument()
        })

        // it("shows confirm password textbox", ()=>{
        //     setup()
        //     const confirmPassword = screen.getByTestId(textfieldConfirmPassword)
        //     expect(confirmPassword).toBeInTheDocument()
        // })

    })
})