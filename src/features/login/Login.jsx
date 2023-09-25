import React from "react";
import { APP_TITLE } from "../../config/constants";
import { LOGIN_TEST_ID } from "../../config/test.constants";
import { TextField } from "../../common/TextField/TextField";
import { Button } from "../../common/Button/Button";
import { Form } from "../../common/Form/Form";

export const Login = (props) => {
  const {  textfieldPassword, textfieldUsername, buttonLogin } = LOGIN_TEST_ID;

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="/colm_logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {APP_TITLE}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form 
          action="#" 
          method="POST">
         
            <TextField
              label={'Username'}
              dataTestId={textfieldUsername}
              type={'text'}
              required
            />

            <TextField
              label={'Password'}
              dataTestId={textfieldPassword}
              type={'password'}
              required
            />

            <Button
            dataTestId={buttonLogin}
              onClick={()=>console.log('Hello')} 
              label={'Submit'}
            />
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};
