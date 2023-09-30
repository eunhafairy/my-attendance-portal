//react or 3rd party imports
import {cleanup, fireEvent, render, screen, waitFor} from '@testing-library/react';
//local imports
import { Login } from "./Login";
import { APP_TITLE } from "../../config/constants";
import { login } from '../../api/auth/login';

//mocks
import { LOADING_ID, LOGIN_TEST_ID } from "../../config/test.constants";
import userEvent from '@testing-library/user-event';
const { textfieldUsername, textfieldPassword, linkRegister, imgLogo, buttonLogin} = LOGIN_TEST_ID
const { main } = LOADING_ID
//jest mock functions
jest.mock('../../api/auth/login')

//test proper
afterEach(cleanup)

describe("Login", () =>{

    const setup = () => {
        render(
            <Login />
        )
    }

    describe("layout", ()=>{

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

        it("shows login button", ()=>{
            setup()
            const loginBtn = screen.getByTestId(buttonLogin)
            expect(loginBtn).toBeInTheDocument()
        })

        it("shows register link", ()=> {
            setup()
            const registerLink = screen.getByTestId(linkRegister)
            expect(registerLink).toBeInTheDocument()

        })
        it("shows logo", () => {
            setup()
            const logoImg = screen.getByTestId(imgLogo)
            expect(logoImg).toBeInTheDocument()
        })

    })

    describe("interactions", ()=>{

        beforeEach(()=>{
            jest.clearAllMocks();
        })

        it("disabled login button with invalid input", () => {
            setup()
            const loginBtn = screen.getByTestId(buttonLogin)
            expect(loginBtn).toBeDisabled()
        })
        
        it("enables login button with valid input", () => {
            setup()
            const username = screen.getByTestId(textfieldUsername)
            const password = screen.getByTestId(textfieldPassword)
            const loginBtn = screen.getByTestId(buttonLogin)
            userEvent.type(username, "sample")
            userEvent.type(password, "123456")
            expect(loginBtn).toBeEnabled()
        })

        it("calls login api upon clicking login button", () => {
            login.mockImplementation(()=>Promise.resolve({status:200, message: 'success'}))
            setup()
            const username = screen.getByTestId(textfieldUsername)
            const password = screen.getByTestId(textfieldPassword)
            const loginBtn = screen.getByTestId(buttonLogin)
            userEvent.type(username, "user")
            userEvent.type(password, "admin")
            expect(loginBtn).toBeEnabled()
            userEvent.click(loginBtn)
            expect(login).toBeCalledTimes(1)
        })

        it("shows loading when login button is called", async () => {
            login.mockImplementation(()=>Promise.resolve({status:200, message: 'success'}))
            setup()
            const loading = screen.queryByTestId(main)
            expect(loading).not.toBeInTheDocument()
            const username = screen.getByTestId(textfieldUsername)
            const password = screen.getByTestId(textfieldPassword)
            const loginBtn = screen.getByTestId(buttonLogin)
            userEvent.type(username, "user")
            userEvent.type(password, "admin")
            userEvent.click(loginBtn)
            await waitFor( () => expect(screen.queryByTestId(main)).toBeVisible()) 
        })
        it.todo("shows proper error when user input wrong credentials")
        it.todo("shows proper error when user input non-existing profile")
        it.todo("navigates to register page upon clicking register button")
        it.todo("shows success snackbar")
        it.todo("shows error snackbar")
    })

})