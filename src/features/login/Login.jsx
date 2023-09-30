import React, { useEffect, useState } from "react";
import { APP_TITLE } from "../../config/constants";
import { LOGIN_TEST_ID } from "../../config/test.constants";
import { TextField } from "../../common/TextField/TextField";
import { Button } from "../../common/Button/Button";
import { Form } from "../../common/Form/Form";
import { login } from "../../api/auth/login";

const DEFAULT_FORM_VALUES = {
  username: '',
  password: ''
}

export const Login = (props) => {
  const {
    textfieldPassword,
    textfieldUsername,
    buttonLogin,
    linkRegister,
    imgLogo,
  } = LOGIN_TEST_ID;

  //hooks
  const [form, setFormValues] = useState({...DEFAULT_FORM_VALUES})
  const [disabled, setDisabled] = useState(true)
  const [loading, setLoading] = useState(false)
  useEffect(()=>{

    if(form.username && form.password){
      setDisabled(false)
    }

  },[form])

  //functions
  const handleFormChanges = (key, value) => {

    setFormValues(prev => ({
      ...prev,
      [key]: value
    }))

  }

  const handleLogin = () => {
    //todo
    //calls api

    setDisabled(true)
    setLoading(true)
    console.log('click')
    login(form.username, form.password)
      .then( response => {
          setDisabled(false)
          setLoading(false)
          console.log(response)
      })
      .catch(ex => {
          setLoading(false)
          setDisabled(false)
          console.error(ex)
      })
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          data-testid={imgLogo}
          className="mx-auto h-10 w-auto"
          src="/colm_logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {APP_TITLE}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form action="#" method="POST">
          <TextField
            dataTestId={textfieldUsername}
            value={form.username}
            onChange={(val) => handleFormChanges('username', val)}
            label={"Username"}
            type={"text"}
            required
          />

          <TextField
            label={"Password"}
            value={form.password}
            onChange={(val) => handleFormChanges('password', val)}
            dataTestId={textfieldPassword}
            type={"password"}
            required
          />

          <Button
            dataTestId={buttonLogin}
            onClick={handleLogin}
            label={"Login"}
            disabled={disabled}
            loading={loading}
          />
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            data-testid={linkRegister}
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};
