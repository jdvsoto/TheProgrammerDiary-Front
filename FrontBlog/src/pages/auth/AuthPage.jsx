import { useState } from "react";
import { Login } from "../../components/Login";

export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleAuthPageToggle = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        <Login switchAuthHandler={handleAuthPageToggle} />
    );
};