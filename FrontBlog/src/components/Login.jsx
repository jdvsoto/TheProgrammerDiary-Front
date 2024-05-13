import { useState } from "react";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import {
    validateEmail,
    validatePassword,
    emailValidationMessage,
    passwordValidationMessage,
} from "../shared/validators";
import { useLogin } from "../shared/hooks";

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        email: {
            value: "",
            isValid: false,
            showError: false,
        },
        password: {
            value: "",
            isValid: false,
            showError: false,
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "email":
                isValid = validateEmail(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            default:
                break;
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(formState.email.value, formState.password.value)
    };

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid;

    return (
        <article className="container-login">
            <Link to="/" className="link">X</Link>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <Input
                    field="email"
                    label="Email"
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type="email"
                    showErrorMessage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <Input
                    field="password"
                    label="Password"
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type="password"
                    showErrorMessage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <button type="submit" disabled={isSubmitButtonDisabled}>
                    {isLoading ? "Loading..." : "Login"}
                </button>
                <div>
                    <span onClick={switchAuthHandler}>Don't have an account? Register here</span>
                </div>
            </form>

        </article>
    );
};