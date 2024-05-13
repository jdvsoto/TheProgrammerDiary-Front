import { useState } from "react";
import { Login } from "../../components/Login";
import { Link } from "react-router-dom";
import './authPage.css';

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthPageToggle = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <div>
            <Login switchAuthHandler={handleAuthPageToggle} />
        </div>
    );
};