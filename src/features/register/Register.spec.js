import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import { Register } from "./Register";

afterEach(cleanup)
describe("Register", () =>{

    const setup = () => {
        render(
            <Register />
        )
    }

    describe("Layout", ()=>{
        it.todo("shows register text")
        it.todo("shows username textbox")  
        it.todo("shows password textbox")  
        it.todo("shows confirm password textbox")  
        it.todo("shows first name textbox")
        it.todo("shows lastname name textbox")  
        it.todo("shows address textbox")  
        it.todo("shows contact no textbox")
        it.todo("shows birthdate textbox")
        it.todo("shows guardian contact no textbox")
        it.todo("shows submit button")
        it.todo("shows back to login button")

    })

    describe("Interactions", ()=> {
        it.todo("calls API when clicking submit button")
        it.todo("calls router when clicking back button")
    })
})